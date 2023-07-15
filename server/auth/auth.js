const auth = (req, res, next = (f) => f) => {
  if (!req.headers.token || req.headers.token !== "secret")
    throw new Error("You are not authorized.");
  // else allow to proceed
  next();
};

export default auth;
