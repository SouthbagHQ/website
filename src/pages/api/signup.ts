import type { APIRoute } from "astro";
import {
  IDENTITY_ACCOUNT_NAME,
  IDENTITY_DASHBOARD_URL,
  IDENTITY_SIGNUP_URL,
} from "../../lib/identity";

type SignupBody = {
  email?: string;
  password?: string;
};

export const POST: APIRoute = async ({ request }) => {
  let body: SignupBody;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = body.email?.trim() ?? "";
  const password = body.password ?? "";

  if (!email || !password) {
    return Response.json(
      { error: "Email and password are required." },
      { status: 400 },
    );
  }

  const origin = new URL(request.url).origin;

  const identityResponse = await fetch(IDENTITY_SIGNUP_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: origin,
    },
    body: JSON.stringify({
      name: IDENTITY_ACCOUNT_NAME,
      email,
      password,
      callbackURL: IDENTITY_DASHBOARD_URL,
    }),
  });

  if (!identityResponse.ok) {
    const error = (await identityResponse.json().catch(() => null)) as {
      message?: string;
    } | null;

    return Response.json(
      { error: error?.message ?? "Account creation failed." },
      { status: identityResponse.status },
    );
  }

  const headers = new Headers({ "Content-Type": "application/json" });
  for (const cookie of identityResponse.headers.getSetCookie()) {
    headers.append("Set-Cookie", cookie);
  }

  return Response.json({ redirect: IDENTITY_DASHBOARD_URL }, { headers });
};
