import auth from "../auth/auth.js";

const me = async (_, args, context) => {
  await auth(context.req);
  return "RAJ";
};

const authResolver = {
  Query: {
    me,
  },
};

export default authResolver;
