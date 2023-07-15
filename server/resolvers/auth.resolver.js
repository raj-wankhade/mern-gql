import auth from "../auth/auth.js";

const authResolver = {
  Query: {
    me: (_, args, context) => {
      auth(context.req, context.res);
      return "RAJ";
    },
  },
};

export default authResolver;
