export const IDENTITY_ORIGIN = "https://identity.southbag.cc";
export const IDENTITY_LOGIN_URL = `${IDENTITY_ORIGIN}/login`;
export const IDENTITY_DASHBOARD_URL = `${IDENTITY_ORIGIN}/home`;
export const IDENTITY_SESSION_URL = `${IDENTITY_ORIGIN}/api/auth/get-session`;
export const IDENTITY_SIGNUP_URL = `${IDENTITY_ORIGIN}/api/auth/sign-up/email`;
export const IDENTITY_ACCOUNT_NAME = "Southbag Customer";

export type IdentityUser = {
  id: string;
  name: string;
  email: string;
};

export type IdentitySession = {
  user: IdentityUser;
};

export async function getIdentitySession(
  request: Request,
): Promise<IdentityUser | null> {
  const cookie = request.headers.get("cookie");
  if (!cookie) return null;

  try {
    const response = await fetch(IDENTITY_SESSION_URL, {
      headers: { cookie },
    });
    if (!response.ok) return null;

    const session = (await response.json()) as IdentitySession | null;
    return session?.user ?? null;
  } catch {
    return null;
  }
}
