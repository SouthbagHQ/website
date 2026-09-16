/// <reference path="../.astro/types.d.ts" />

declare namespace App {
  interface Locals {
    user: import("./lib/identity").IdentityUser | null;
  }
}

interface Window {
  posthog?: {
    capture: (
      event: string,
      properties?: Record<string, unknown>,
      options?: { send_instantly?: boolean },
    ) => void;
    identify: (id: string, properties?: Record<string, unknown>) => void;
    reset: () => void;
  };
  palantir?: {
    capture: (event: string, properties?: Record<string, unknown>) => void;
    identify: (user: { id: string; email?: string; name?: string }) => void;
    reset: () => void;
  };
}
