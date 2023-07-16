import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { gql, useMutation } from "@apollo/client";

import {
  auth,
  isSignInWithEmailLink,
  signInWithEmailLink,
  updatePassword,
} from "../../firebase.js";
import Alert from "../../components/Alert.js";
import { AuthContext } from "../../context/authContext.js";

const CREATE_USER = gql`
  mutation userCreate {
    userCreate {
      username
      password
      email
    }
  }
`;

export default function CompleteRegistration() {
  const [userCreate] = useMutation(CREATE_USER);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [alertType, setAlertType] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const { state, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForSignIn"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // if (!email || !password) {
    //   setShowAlert(true);
    //   setAlertType("danger");
    // }
    if (isSignInWithEmailLink(auth, window.location.href)) {
      const result = await signInWithEmailLink(
        auth,
        email,
        window.location.href
      );
      console.log("result is", result);
      const user = result.user;
      const idToken = user.idToken;

      // update user password
      await updatePassword(user, password);

      // Clear email from storage.
      window.localStorage.removeItem("emailForSignIn");

      // dispatch idToken
      dispatch({
        type: "LOGGED_IN_USER",
        payload: { email: user.email, token: idToken },
      });

      // dispatch graphql query to save the user in db
      userCreate();

      // redirect
      navigate("/");
    }

    console.log("submit success");
  };

  return (
    <div className="container">
      <h2>Congratulations!</h2>
      <p>Registration complete.</p>

      <Alert type={alertType} show={showAlert} />
      <form onSubmit={handleSubmit}>
        <div className="mb-3 w-100 m-auto">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            autoComplete="true"
            disabled
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            autoComplete="true"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={loading ? true : false}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
