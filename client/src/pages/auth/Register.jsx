import { auth, sendSignInLinkToEmail } from "../../firebase";
import React, { useState } from "react";
import Alert from "../../components/Alert";
import AuthForm from "../../form/AuthForm";
import PageTitle from "../../components/PageTitle";

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
    <div className="d-flex justify-content-center">
      <div className="container px-4">
        <div className="row gx-5 p-3">
          <PageTitle loading={loading} title={"Register"} />
          <Alert type={alertType} show={showAlert} />
          <AuthForm
            email={email}
            loading={loading}
            setEmail={setEmail}
            handleSubmit={handleSubmit}
            isLogin={true}
          />
        </div>
      </div>
    </div>
  );
}
