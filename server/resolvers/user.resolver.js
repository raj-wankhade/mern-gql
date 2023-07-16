import shortid from "shortid";
import auth from "../auth/auth.js";
import User from "../models/User.js";

const userCreate = async (_, args, context) => {
  const currentUser = await auth(context.req);
  console.log("currentUser is", currentUser);
  const user = await User.findOne({ email: currentUser.email });

  if (user) {
    throw new Error("User exists");
  }

  const newUser = new User({
    username: shortid.generate(),
    email: currentUser.email,
    password: shortid.generate(),
    name: currentUser.name,
  });

  newUser.save();
  return newUser;
};

const userResolver = {
  Mutation: {
    userCreate,
  },
};

export default userResolver;
