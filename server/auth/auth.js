import admin from "firebase-admin";

import serviceAccount from "../config/firebaseAdminSecretServiceAccountKey.json" assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const auth = async (req, res, next = (f) => f) => {
  if (!req.headers.token) throw new Error("You are not authorized.");

  try {
    const currentUser = await admin.auth().verifyIdToken(req.headers.token);

    return currentUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default auth;
