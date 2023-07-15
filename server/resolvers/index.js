import { mergeResolvers } from "@graphql-tools/merge";

import authResolver from "./auth.resolver.js";
import authorsResolver from "./author.resolver.js";
import postsResolver from "./post.resolver.js";

const resolvers = [authResolver, authorsResolver, postsResolver];

export default mergeResolvers(resolvers);
