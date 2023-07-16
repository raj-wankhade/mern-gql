// merge typeDefs
import { mergeTypeDefs } from "@graphql-tools/merge";

import auth from "./auth.graphql.js";
import post from "./post.graphql.js";
import author from "./author.graphql.js";
import user from "./user.graphql.js";

const typeDefs = [auth, post, author, user];

export default mergeTypeDefs(typeDefs);
