import { defineMiddleware } from "astro:middleware";
import { getIdentitySession } from "./lib/identity";
import {
  getOnboardingDestination,
  parseOnboardingFlow,
} from "./lib/onboarding-flows";

export const onRequest = defineMiddleware(async (context, next) => {
  context.locals.user = await getIdentitySession(context.request);

  // Signed-in visitors never see the registration form. Either way they are
  // handed to Banking, which signs them in off the Identity session: the
  // default flow lands on the banking dashboard, while `?flow=slack-banking`
  // auto-answers "yes, I have an account" and jumps straight into the
  // banking → Slack linking handshake.
  if (context.url.pathname === "/onboarding" && context.locals.user) {
    const flow = parseOnboardingFlow(context.url.searchParams.get("flow"));
    return context.redirect(getOnboardingDestination(flow), 302);
  }

  return next();
});
