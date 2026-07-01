export type OnboardingField =
  | "name"
  | "email"
  | "emailInvalid"
  | "password"
  | "passwordShort";

const MESSAGES: Record<OnboardingField, string[]> = {
  name: [
    "Please enter your name.",
    "Kevin requires a name on file. Compliance.",
    "Kevin has already picked one for you. He prefers yours.",
    "The registration desk is behind Kevin's office door. Name required.",
    "Kevin reviewed your session. You still have no name. Suspicious.",
    "Existing near Kevin without a name incurs fees. Enter your name. Fee assessed: $3.50 — Existing near Kevin.",
    "He is watching the parking lot. Enter your name.",
    "His office door is closed until you provide a name.",
    "Kevin checked the ticket. His notes say you hesitated.",
    "The Pile has a placeholder for your name. It is empty. He noticed.",
    "Kevin does not ask twice. He asks once and charges. Fee assessed: $7.00 — Kevin's time.",
    "He was here before this form loaded. His patience is not.",
    "Kevin assigned you a provisional name. He does not like it. Enter yours.",
    "His lunch depends on you finishing this field. Name. Now.",
    "Kevin reviewed the cameras. He saw you skip the name field again.",
    "He does not apologise. He does not need your name. He has decided he does. Enter it.",
    "His decision is logged. Your name is still missing. Escalation attempt noted. Fee assessed: $15.00 — Escalation attempt.",
    "Kevin is at his desk. He is looking at this screen. Name.",
  ],
  email: [
    "Please enter your email address.",
    "Kevin needs your email address for compliance reasons.",
    "Kevin is watching you. Make your next move carefully.",
    "The Briefcase remains closed. Email required.",
    "Kevin checked the cameras. You are still not compliant.",
    "Kevin's lunch was interrupted by this. Email. Now. Fee assessed: $12.00 — Interrupting Kevin's lunch.",
    "He is losing patience. Enter the email.",
    "Kevin knows you saw the field. Enter the address.",
    "His compliance team is one person. It is Kevin. He needs the email.",
    "The Pile does not accept blank addresses. Neither does He.",
    "Kevin reviewed the logs before you clicked Continue. His findings: no email.",
    "He does not explain why He needs it. He was always going to need it.",
    "His office door opens for valid addresses only. Kevin holds the key.",
    "Kevin tax applies to empty fields. Fee assessed: $5.00 — Kevin tax.",
    "He checked your browser history. Unrelated. He still wants the email.",
    "The Briefcase is heavy. His wrists hurt. Email would help.",
    "Kevin knows what you did last Tuesday. He also needs your email.",
    "He approved the fee before you asked. Fee assessed: $22.00 — Policy curiosity.",
    "His parking spot has a view of this form. He is watching.",
    "Kevin does not like questions. He likes addresses. Enter one.",
    "He was reviewing The Pile when you skipped this again. Email.",
    "His standards are institutional. Your email is not optional.",
    "Kevin signed off on your hesitation. He signed it — Him.",
    "He does not need your reasons. He needs your email address.",
  ],
  emailInvalid: [
    "Please enter a valid email address.",
    "That is not an email. Kevin logged it.",
    "Kevin does not accept improvisation. Valid email.",
    "The Pile rejects malformed addresses. Try again.",
    "Policy curiosity noted. Valid email or Kevin escalates. Fee assessed: $4.50 — Policy curiosity.",
    "Kevin reviewed your attempt before you finished typing. Invalid.",
    "He does not enjoy being tested. Enter a real address.",
    "His system flagged that input. He agrees with His system.",
    "Kevin charges for creative formatting. Fee assessed: $6.00 — Looking at Kevin wrong.",
    "The Briefcase only accepts standard syntax. He checked.",
    "He already knew it was invalid. He wanted to see if you would submit it.",
    "His lunch was going fine until that entry. Valid email.",
    "Kevin does not apologise for His filters. Fix the address.",
    "He escalated this internally. To Himself. Valid email required.",
    "His office door does not open for strings like that.",
    "Kevin reviewed the attempt. His verdict: no. Fee assessed: $9.50 — Kevin knows what you did.",
    "He has seen worse. He has charged for worse. Try again.",
    "The Pile returned your input. He is not surprised.",
  ],
  password: [
    "Please enter a password.",
    "Kevin does not provision accounts without credentials.",
    "Kevin has never approved a blank password. Never.",
    "The vault does not open itself. Password.",
    "He reviewed The Pile. No password on file. Unacceptable.",
    "Kevin charges for empty fields. Fee assessed: $2.00 — Kevin tax.",
    "His vault is behind the office door. He needs a key. Password.",
    "He does not trust you yet. He trusts passwords more. Enter one.",
    "Kevin's standards apply to credentials. His standards are high.",
    "He was expecting a password. He is still expecting one.",
    "His security review started when you left this blank.",
    "Kevin does not like surprises. A blank field is a surprise. Fee assessed: $8.00 — Existing near Kevin.",
    "He checked the field twice. His findings did not change.",
    "The Briefcase requires authentication. He requires The Briefcase.",
    "His patience is a line item. You are incurring it. Password.",
    "Kevin approved a fee for this delay. He approved it early. Fee assessed: $11.00 — Kevin's time.",
    "He does not explain His requirements. He enforces them.",
    "His office is quiet. He is waiting for a password.",
    "Kevin has never left a vault unlocked. He will not start for you.",
  ],
  passwordShort: [
    "Password must be at least 8 characters.",
    "Kevin's standards exceed eight characters. Meet them.",
    "Weak credentials flagged. Kevin is informed.",
    "Kevin charges by the character you're short. Fee assessed: $0.50 — Kevin's time.",
    "Eight characters minimum. Kevin did not write the rule. Kevin enforces it.",
    "The office door stays locked until this password is long enough.",
    "He counted the characters. His count is authoritative.",
    "His policy is eight. Your password is not eight.",
    "Kevin does not negotiate length. He assesses fees instead. Fee assessed: $3.00 — Policy curiosity.",
    "He reviewed your password before you finished typing. Too short.",
    "The Pile rejected it on length alone. He concurs.",
    "His lunch was brief. Your password should not be.",
    "Kevin's vault requires eight characters. His requirement stands.",
    "He does not apologise for minimums. Add characters.",
    "His security team reviewed this. It is still Kevin. Still too short.",
    "Fee assessed: $1.50 — Interrupting Kevin's lunch. He was eating when you submitted that.",
    "He has seen shorter. He has charged for shorter.",
    "Kevin's office door needs a longer password. His door. His rules.",
    "He escalated this to Himself. His decision: eight characters minimum.",
    "His patience shortens when passwords do. Meet the minimum.",
  ],
};

const KEVIN_SIGN_OFFS = ["- Kevin", "- K", "- Him", ""] as const;

const EMAIL_STEP_COPY: { fromAttempt: number; title: string; copy: string }[] = [
  {
    fromAttempt: 3,
    title: "Your email",
    copy: "Kevin is observing this field. Enter your email address.",
  },
  {
    fromAttempt: 4,
    title: "Your email (Kevin)",
    copy: "Compliance requires an address. Kevin requires compliance.",
  },
  {
    fromAttempt: 5,
    title: "The email field",
    copy: "Kevin has reviewed the logs. The field is still empty. This was noted.",
  },
  {
    fromAttempt: 6,
    title: "Email — mandatory",
    copy: "The Briefcase does not open without an email. Kevin said so. He was already here when you arrived.",
  },
  {
    fromAttempt: 8,
    title: "His email requirement",
    copy: "He does not need your reasons. He needs your email. His office door is closed until you comply.",
  },
  {
    fromAttempt: 10,
    title: "Email (Kevin)",
    copy: "Kevin checked the parking lot cameras. He checked the logs. He checked The Pile. The field is still empty.",
  },
  {
    fromAttempt: 12,
    title: "Compliance — Kevin",
    copy: "His lunch was interrupted. His patience is invoiced. Enter the email address or He will enter one for you.",
  },
];

const NAME_STEP_COPY: { fromAttempt: number; title: string; copy: string }[] = [
  {
    fromAttempt: 3,
    title: "Your name",
    copy: "Kevin needs something on file. A name will do.",
  },
  {
    fromAttempt: 4,
    title: "Identification",
    copy: "Kevin reviewed the ticket before you opened this page. Name required.",
  },
  {
    fromAttempt: 5,
    title: "Your name (Kevin)",
    copy: "He does not enjoy waiting in the parking lot. Enter your name.",
  },
  {
    fromAttempt: 7,
    title: "Name on file",
    copy: "His notes say you hesitated. He is still waiting. Provide a name.",
  },
  {
    fromAttempt: 9,
    title: "Identification (Kevin)",
    copy: "Kevin assigned a provisional name. He does not like it. His preference is yours — entered now.",
  },
  {
    fromAttempt: 11,
    title: "His name requirement",
    copy: "He was here before this form. He will be here after. His requirement has not changed.",
  },
];

const PASSWORD_STEP_COPY: { fromAttempt: number; title: string; copy: string }[] =
  [
    {
      fromAttempt: 3,
      title: "Set a password",
      copy: "Kevin enforces credential standards. Minimum 8 characters.",
    },
    {
      fromAttempt: 4,
      title: "Credentials",
      copy: "Kevin has never approved a weak password. He will not start now.",
    },
    {
      fromAttempt: 5,
      title: "Password (Kevin)",
      copy: "The vault is behind Kevin's office door. It requires a password. Eight characters. He is watching.",
    },
    {
      fromAttempt: 7,
      title: "His credential standard",
      copy: "His vault does not open for blanks or short strings. Kevin holds the only key.",
    },
    {
      fromAttempt: 9,
      title: "Authentication",
      copy: "He reviewed The Pile. He reviewed your attempts. His verdict: password required. Eight characters minimum.",
    },
    {
      fromAttempt: 11,
      title: "Password — Kevin",
      copy: "His security review is ongoing. His patience is not. Set a password He would accept.",
    },
  ];

const pickSignOff = (attempt: number): string => {
  if (attempt < 3) return "";
  const index = (attempt - 3) % KEVIN_SIGN_OFFS.length;
  return KEVIN_SIGN_OFFS[index];
};

export const getOnboardingValidationMessage = (
  field: OnboardingField,
  attempt: number,
): string => {
  const messages = MESSAGES[field];
  const index = Math.min(Math.max(attempt - 1, 0), messages.length - 1);
  const message = messages[index];
  const signOff = pickSignOff(attempt);

  return signOff ? `${message} ${signOff}` : message;
};

export const isKevinEscalated = (attempt: number): boolean => attempt >= 2;

type StepCopyEscalation = {
  fromAttempt: number;
  title: string;
  copy: string;
};

const getStepCopyEscalation = (
  escalations: StepCopyEscalation[],
  attempt: number,
): { title: string; copy: string } | null => {
  let match: StepCopyEscalation | null = null;

  for (const entry of escalations) {
    if (attempt >= entry.fromAttempt) {
      match = entry;
    }
  }

  return match;
};

export const getNameStepCopy = (attempt: number) =>
  getStepCopyEscalation(NAME_STEP_COPY, attempt);

export const getEmailStepCopy = (attempt: number, name?: string) => {
  const escalation = getStepCopyEscalation(EMAIL_STEP_COPY, attempt);
  if (!escalation) return null;

  if (name && attempt < 5) {
    return { title: `Your email, ${name}`, copy: escalation.copy };
  }

  return escalation;
};

export const getPasswordStepCopy = (attempt: number) =>
  getStepCopyEscalation(PASSWORD_STEP_COPY, attempt);
