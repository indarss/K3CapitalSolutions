import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type SendEmailArgs = {
  from?: string;
  to: string | string[];
  cc?: string | string[];
  bcc?: string | string[];
  replyTo?: string;
  subject: string;
  html: string;
  text?: string;
  tags?: { name: string; value: string }[];
};

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

export async function sendEmail(args: SendEmailArgs) {
  // Ensure key exists early with a clear error in logs
  requireEnv("RESEND_API_KEY");

  const from =
    args.from ?? "K3 Capital Solutions <noreply@k3capitalsolutions.com>";

  return resend.emails.send({
    from,
    to: args.to,
    cc: args.cc,
    bcc: args.bcc,
    replyTo: args.replyTo,
    subject: args.subject,
    html: args.html,
    text: args.text,
    tags: args.tags,
  });
}
