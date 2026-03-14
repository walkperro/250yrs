"use client";

import { useMemo, useState } from "react";

type FoundersIntakeFormProps = {
  productName?: string;
  title?: string;
  description?: string;
  compact?: boolean;
};

function buildMailtoLink({
  to,
  name,
  email,
  interest,
  productName,
}: {
  to: string;
  name: string;
  email: string;
  interest: string;
  productName?: string;
}) {
  const subject = productName
    ? `True American Wear inquiry — ${productName}`
    : "True American Wear list inquiry";

  const bodyLines = [
    "True American Wear inquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Interest: ${interest}`,
    productName ? `Product: ${productName}` : undefined,
    "",
    "Please follow up with early access details.",
  ].filter(Boolean);

  const params = new URLSearchParams({
    subject,
    body: bodyLines.join("\n"),
  });

  return `mailto:${to}?${params.toString()}`;
}

export function FoundersIntakeForm({
  productName,
  title = "Join the list",
  description = "Be first in line for early access, product updates, and the first release.",
  compact = false,
}: FoundersIntakeFormProps) {
  const inbox = process.env.NEXT_PUBLIC_WAITLIST_EMAIL ?? "";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState(productName ?? "250th Year Collection");

  const disabled = !inbox;

  const mailtoHref = useMemo(() => {
    if (!inbox || !name || !email) return "#";

    return buildMailtoLink({
      to: inbox,
      name,
      email,
      interest,
      productName,
    });
  }, [email, inbox, interest, name, productName]);

  return (
    <div className="rounded-[1.7rem] border border-white/8 bg-white/5 p-5 sm:p-6">
      <div className="space-y-2">
        <p className="eyebrow">Early access</p>
        <h3 className="font-display text-3xl text-brand-cream">{title}</h3>
        <p className="max-w-2xl text-sm leading-6 text-white/64">{description}</p>
      </div>

      <form className="mt-5 grid gap-4" action={mailtoHref} method="get">
        <div className={`grid gap-4 ${compact ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
          <label className="grid gap-2 text-sm text-white/70">
            <span>Name</span>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-brand-cream outline-none transition placeholder:text-white/35 focus:border-brand-gold"
            />
          </label>

          <label className="grid gap-2 text-sm text-white/70">
            <span>Email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-brand-cream outline-none transition placeholder:text-white/35 focus:border-brand-gold"
            />
          </label>

          <label className="grid gap-2 text-sm text-white/70 md:col-span-2">
            <span>Interest</span>
            <input
              value={interest}
              onChange={(event) => setInterest(event.target.value)}
              placeholder="250th Year Collection / preorder / wholesale / early access"
              className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-brand-cream outline-none transition placeholder:text-white/35 focus:border-brand-gold"
            />
          </label>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button type="submit" className="button-primary" disabled={disabled || !name || !email}>
            Join now
          </button>
          <p className="text-xs leading-5 text-white/52">
            {disabled
              ? "Set NEXT_PUBLIC_WAITLIST_EMAIL to enable list capture."
              : `Currently routed to ${inbox}.`}
          </p>
        </div>
      </form>
    </div>
  );
}
