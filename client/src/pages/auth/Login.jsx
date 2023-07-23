import React, { useContext, useState, useRef } from "react";
import { gql, useMutation } from "@apollo/client";
import { toast, ToastContainer } from "react-toastify";

import { AuthContext } from "../../context/authContext";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithPopup,
  provider,
} from "../../firebase";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../form/AuthForm";
import Toast from "../../components/Toast";
import Header from "../../components/Header";

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

  const { dispatch } = useContext(AuthContext);

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
        Toast("success", "Login successfull!");
      })
      .catch((e) => {
        console.log(e.message);
        Toast("error", e.message);
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

        Toast("success", "Login successfull!");

        navigate("/profile");
      })
      .catch((e) => {
        console.log(e.message);
        Toast("error", e.message);
      });
    setLoading(false);
  };

  return (
    <>
      <Header />
      <div className="container col-md-6">
        {loading ? <h4 className="text-danger">Loading...</h4> : <h4>Login</h4>}

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
            <div className="text-center">
              <p>or sign up with:</p>
              <button
                type="button"
                className="btn btn-secondary btn-floating mx-1"
              >
                <i className="bi bi-facebook"></i>{" "}
              </button>

              <button
                type="button"
                className="btn btn-secondary btn-floating mx-1"
                onClick={googleLogin}
              >
                <i className="bi bi-google"></i>{" "}
              </button>

              <button
                type="button"
                className="btn btn-secondary btn-floating mx-1"
              >
                <i className="bi bi-twitter"></i>{" "}
              </button>

              <button
                type="button"
                className="btn btn-secondary btn-floating mx-1"
              >
                <i className="bi bi-github"></i>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
