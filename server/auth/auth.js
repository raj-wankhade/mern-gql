import admin from "firebase-admin";

import serviceAccount from "../config/firebaseAdminSecretServiceAccountKey.json" assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const auth = async (req, res, next = (f) => f) => {
  if (!req.headers.token) throw new Error("You are not authorized.");

  try {
    const result = await admin.auth().verifyIdToken(req.headers.token);
    console.log("result is", result);
    if (result) {
      next();
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export default auth;
