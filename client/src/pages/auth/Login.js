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
import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../../form/AuthForm";

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
      {loading ? <h4 className="text-danger">Loading...</h4> : <h4>Login</h4>}
      <Alert type={alertType} show={showAlert} />

      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        loading={loading}
        handleSubmit={handleSubmit}
        showPasswordInput="true"
      />
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <Link className="text-danger float-right" to="/password/forgot">
              Forgot Password
            </Link>
          </div>
          <div className="col-sm-6">
            <button
              onClick={googleLogin}
              className="btn btn-raised btn-danger float-left"
            >
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
