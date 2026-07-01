import { defineMiddleware } from "astro:middleware";
import { getIdentitySession } from "./lib/identity";

export const onRequest = defineMiddleware(async (context, next) => {
  context.locals.user = await getIdentitySession(context.request);
  return next();
});
