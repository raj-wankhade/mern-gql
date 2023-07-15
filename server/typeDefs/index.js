// merge typeDefs
import { mergeTypeDefs } from "@graphql-tools/merge";

import auth from "./auth.graphql.js";
import post from "./post.graphql.js";
import author from "./author.graphql.js";

const typeDefs = [auth, post, author];

export default mergeTypeDefs(typeDefs);
