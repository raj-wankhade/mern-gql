import { auth, sendSignInLinkToEmail } from "../../firebase.js";
import React, { useState } from "react";
import Alert from "../../components/Alert.js";
import AuthForm from "../../form/AuthForm.js";

export default function Register() {
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [alertType, setIAlertType] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

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
        // Save the email locally so you don't need to ask the user for it again
        window.localStorage.setItem("emailForSignIn", email);
        setShowAlert(true);
        setIAlertType("success");
      })
      .catch((e) => {
        console.log(e.message);
        setShowAlert(true);
        setIAlertType("danger");
      });

    // firebase ends here
  };

  return (
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
  );
}
