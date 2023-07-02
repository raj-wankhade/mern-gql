// merge typeDefs
import { mergeTypeDefs } from "@graphql-tools/merge";

import post from "./post.graphql.js";
import author from "./author.graphql.js";

const typeDefs = [post, author];

export default mergeTypeDefs(typeDefs);
