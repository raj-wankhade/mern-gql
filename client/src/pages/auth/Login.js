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
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const accessToken = user.accessToken;
        const providerId = userCredential.providerId;

        // dispatch accessToken
        dispatch({
          type: "LOGGED_IN_USER",
          payload: { email: user.email, token: accessToken, providerId },
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
  };

  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.idToken;
        // The signed-in user info.
        const user = result.user;
        const providerId = result.providerId;
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
