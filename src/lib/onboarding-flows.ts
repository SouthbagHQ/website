import { IDENTITY_DASHBOARD_URL } from "./identity";

export const BANKING_ORIGIN = "https://banking.southbag.cc";

/**
 * Banking signs the visitor in through Identity (if it has to) and then kicks
 * off the Sign in with Slack handshake — not the Link Slack page itself.
 */
export const BANKING_SLACK_ONBOARD_URL = `${BANKING_ORIGIN}/auth/slack/onboard`;

export const ONBOARDING_FLOWS = ["default", "slack-banking"] as const;

export type OnboardingFlow = (typeof ONBOARDING_FLOWS)[number];

export const parseOnboardingFlow = (value: string | null): OnboardingFlow =>
  (ONBOARDING_FLOWS as readonly string[]).includes(value ?? "")
    ? (value as OnboardingFlow)
    : "default";

/** Where a visitor with a live Identity session is sent for a given flow. */
export const getOnboardingDestination = (flow: OnboardingFlow): string =>
  flow === "slack-banking" ? BANKING_SLACK_ONBOARD_URL : IDENTITY_DASHBOARD_URL;
