import { auth, sendSignInLinkToEmail } from "../../firebase.js";
import React, { useState } from "react";
import AuthForm from "../../form/AuthForm";
import Toast from "../../components/Toast.jsx";
import AuthHeader from "./AuthHeader.jsx";

export default function Register() {
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // firebase starts here
    sendSignInLinkToEmail(auth, email, {
      // redirect url
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT_ENDPOINT,
      // this is a must
      handleCodeInApp: true,
    })
      .then(() => {
        setLoading(false);

        // Save the email locally so you don't need to ask the user for it again
        window.localStorage.setItem("emailForSignIn", email);
        Toast("success", "Please check your email...");
      })
      .catch((e) => {
        console.log(e.message);
        Toast("error", e.message);
      });

    // firebase ends here
  };

  return (
    <>
      <AuthHeader />
      <div className="container col-md-6">
        {loading ? (
          <h4 className="text-danger">Loading...</h4>
        ) : (
          <h4>Register</h4>
        )}
        <AuthForm
          email={email}
          loading={loading}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
