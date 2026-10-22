"use client";

import { useState } from "react";
import Icon from "@/components/Icon";

type FormStatus = "idle" | "loading" | "success" | "error";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactForm({ enabled }: { enabled: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const isValid =
    name.trim().length >= 2 && isValidEmail(email) && message.trim().length >= 10;
  const isLoading = status === "loading";
  const isSuccess = status === "success";
  const isDisabled = !enabled || isLoading || isSuccess;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!enabled || !isValid || isLoading) return;

    setStatus("loading");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      if (!response.ok) {
        let errorMessage = "Something went wrong. Please try again later.";
        try {
          const data = await response.json();
          if (data && typeof data.error === "string") {
            errorMessage = data.error;
          }
        } catch (parseError) {
          console.warn(parseError);
        }
        setError(errorMessage);
        setStatus("error");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (requestError) {
      console.warn(requestError);
      setError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  const submitDisabled = !enabled || !isValid || isLoading || isSuccess;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm font-semibold text-[color:var(--color-ink)]"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          disabled={isDisabled}
          placeholder="Your name"
          className="w-full rounded-2xl border border-[color:var(--color-line)] bg-white px-4 py-3 text-base text-[color:var(--color-ink)] shadow-sm transition focus:border-[color:var(--color-petal)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-petal)]/20 disabled:cursor-not-allowed disabled:opacity-60"
          required
          aria-invalid={name.length > 0 && name.trim().length < 2}
        />
        {name.length > 0 && name.trim().length < 2 && (
          <p className="text-sm text-[color:var(--color-berry)]">
            Please enter at least 2 characters.
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-semibold text-[color:var(--color-ink)]"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={isDisabled}
          placeholder="you@example.com"
          className="w-full rounded-2xl border border-[color:var(--color-line)] bg-white px-4 py-3 text-base text-[color:var(--color-ink)] shadow-sm transition focus:border-[color:var(--color-petal)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-petal)]/20 disabled:cursor-not-allowed disabled:opacity-60"
          required
          aria-invalid={email.length > 0 && !isValidEmail(email)}
        />
        {email.length > 0 && !isValidEmail(email) && (
          <p className="text-sm text-[color:var(--color-berry)]">
            Please enter a valid email address.
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-semibold text-[color:var(--color-ink)]"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          disabled={isDisabled}
          placeholder="Tell me a little about your idea..."
          className="w-full rounded-2xl border border-[color:var(--color-line)] bg-white px-4 py-3 text-base text-[color:var(--color-ink)] shadow-sm transition focus:border-[color:var(--color-petal)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-petal)]/20 disabled:cursor-not-allowed disabled:opacity-60"
          required
          maxLength={2000}
          aria-invalid={message.length > 0 && message.trim().length < 10}
        />
        <div className="flex items-center justify-between text-xs text-[color:var(--color-mauve)]">
          <span>
            {message.length > 0 && message.trim().length < 10
              ? "Minimum 10 characters."
              : ""}
          </span>
          <span>{message.length}/2000</span>
        </div>
      </div>

      {!enabled && (
        <p className="text-sm text-[color:var(--color-mauve)]">
          This form is in preview mode. Submissions are disabled until the
          environment variables are configured.
        </p>
      )}

      {status === "error" && error && (
        <div className="flex items-start gap-2 rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-blush)]/60 p-4 text-sm text-[color:var(--color-ink)]">
          <Icon
            name="alert"
            size={18}
            className="mt-0.5 text-[color:var(--color-berry)]"
          />
          <p>{error}</p>
        </div>
      )}

      {status === "success" && (
        <div className="flex items-start gap-2 rounded-2xl border border-[color:var(--color-line)] bg-white p-4 text-sm text-[color:var(--color-ink)]">
          <Icon
            name="check"
            size={18}
            className="mt-0.5 text-[color:var(--color-berry)]"
          />
          <div className="flex flex-col gap-1">
            <p className="font-semibold">Message sent!</p>
            <p className="text-[color:var(--color-mauve)]">
              Thanks for getting in touch. I&apos;ll get back to you soon.
            </p>
          </div>
        </div>
      )}

      <button type="submit" className="btn btn-primary self-start" disabled={submitDisabled}>
        {isLoading ? (
          <>
            <Icon name="loader" size={18} className="animate-spin" />
            Sending...
          </>
        ) : isSuccess ? (
          <>
            <Icon name="check" size={18} />
            Sent
          </>
        ) : (
          <>
            <Icon name="send" size={18} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
