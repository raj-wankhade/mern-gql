import { mergeResolvers } from "@graphql-tools/merge";

import authorsResolver from "./author.resolver.js";
import postsResolver from "./post.resolver.js";

const resolvers = [authorsResolver, postsResolver];

export default mergeResolvers(resolvers);
