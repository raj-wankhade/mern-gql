import React, { useContext, useState } from "react";
import { gql, useMutation } from "@apollo/client";

import Alert from "../../components/Alert";
import { AuthContext } from "../../context/authContext";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  provider,
} from "../../firebase";
import { useNavigate } from "react-router-dom";

const CREATE_USER = gql`
  mutation userCreate {
    userCreate {
      username
      password
      email
    }
  }
`;

export default function Login() {
  const [userCreate] = useMutation(CREATE_USER);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [alertType, setIAlertType] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const { state, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();

        localStorage.setItem("accessToken", idTokenResult.token);

        dispatch({
          type: "LOGGED_IN_USER",
          payload: { email: user.email, token: idTokenResult.token },
        });

        // send user info to our server mongodb to either update/create
        userCreate();

        navigate("/profile");

        setShowAlert(true);
        setIAlertType("success");
      })
      .catch((e) => {
        console.log(e.message);
        setShowAlert(true);
        setIAlertType("danger");
      });
    setLoading(false);
  };

  const googleLogin = () => {
    setLoading(true);

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const token = result.user.accessToken;
        const providerId = result.providerId;

        localStorage.setItem("accessToken", token);

        // dispatch accessToken
        dispatch({
          type: "LOGGED_IN_USER",
          payload: { email: user.email, token: token, providerId },
        });
        // dispatch graphql query to save the user in db
        userCreate();

        setShowAlert(true);
        setIAlertType("success");
      })
      .catch((e) => {
        console.log(e.message);
        setShowAlert(true);
        setIAlertType("danger");
      });
    setLoading(false);
  };

  return (
    <div className="container col-md-6">
      <h3>Welcome</h3>
      <p>Please login to continue</p>
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
          />
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading ? true : false}
          >
            Submit
          </button>
          {!state.user && (
            <button
              className="btn btn-danger"
              type="button"
              onClick={googleLogin}
            >
              Login with Google
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
