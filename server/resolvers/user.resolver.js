import shortid from "shortid";
import auth from "../auth/auth.js";
import User from "../models/User.js";

const userCreate = async (_, args, context) => {
  const currentUser = await auth(context.req);
  const user = await User.findOne({ email: currentUser.email });

  return user
    ? user
    : new User({
        username: shortid.generate(),
        email: currentUser.email,
        password: shortid.generate(),
        name: currentUser.name,
      }).save();
};

const userResolver = {
  Mutation: {
    userCreate,
  },
};

export default userResolver;
