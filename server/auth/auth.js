const auth = (req, res, next) => {
  // this console will print on terminal as it is coming from backend nodejs
  console.log("inside auth middleware");
  next();
};

export default auth;
