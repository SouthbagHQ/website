import { defineMiddleware } from "astro:middleware";
import { getIdentitySession } from "./lib/identity";
import { parseOnboardingFlow } from "./lib/onboarding-flows";

export const onRequest = defineMiddleware(async (context, next) => {
  context.locals.user = await getIdentitySession(context.request);

  // Identity sign-up requires a signed-out session, so a signed-in visitor
  // on /onboarding can't register anyway. Instead of silently redirecting
  // them into Banking, render the session-aware state: it names the active
  // session and offers both doors — continue to the flow's destination (the
  // banking dashboard, or the Slack linking handshake for
  // `?flow=slack-banking`) or sign out to register another account.
  if (context.url.pathname === "/onboarding" && context.locals.user) {
    const flow = parseOnboardingFlow(context.url.searchParams.get("flow"));
    // Personalized response: never let any shared cache store it.
    const response = await context.rewrite(`/onboarding/session?flow=${flow}`);
    response.headers.set("Cache-Control", "private, no-store");
    return response;
  }

  return next();
});
