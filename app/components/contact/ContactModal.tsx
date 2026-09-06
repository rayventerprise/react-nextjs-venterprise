"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowIcon } from "@/app/components/ui/icons";
import { siteConfig } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

// Web3Forms access key carried over from the original venterprise.io contact form.
const ACCESS_KEY = "0e2ced6d-f1fb-4dcc-a6ee-93614f84cc99";

export function ContactModal({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Only touches setState and refs, so it's stable for the lifetime of the
  // component and safe as an effect dependency.
  const close = useCallback(() => {
    setOpen(false);
    // Send focus back to the button that opened the dialog.
    triggerRef.current?.focus();
    // Reset back to the form shortly after the close animation.
    window.setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 300);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        // Route through close() so Escape restores focus to the trigger too,
        // rather than dropping it on <body>.
        close();
        return;
      }
      if (e.key !== "Tab") return;

      // Focus trap: keep Tab cycling inside the dialog while it's open.
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    // Focus the first field once the open transition starts.
    const id = window.setTimeout(() => firstFieldRef.current?.focus(), 50);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      window.clearTimeout(id);
    };
  }, [open, close]);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setMessage("");
    try {
      const formData = new FormData(e.currentTarget);
      formData.append("access_key", ACCESS_KEY);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setMessage(data.message || "Thanks! I'll be in touch soon.");
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again later.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again later.");
    }
  };

  const field =
    "w-full rounded-lg border border-[rgba(var(--border))] bg-[rgb(var(--surface))] px-4 py-3 text-sm outline-none transition-colors placeholder:opacity-50 focus:border-primary focus:ring-2 focus:ring-primary/30";
  const labelCls = "mb-1.5 block text-xs font-medium uppercase tracking-wider opacity-70";

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className={`group ${className}`}
      >
        <span className="flex items-center gap-2">
          Let&apos;s Talk
          <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </button>

      {/* Modal — portaled to body to escape transformed/clipping ancestors */}
      {mounted &&
        createPortal(
          <div
            // `invisible` (visibility: hidden) is what takes the form fields
            // out of the tab order and the accessibility tree while closed.
            // Opacity alone left them focusable, which both dropped keyboard
            // users into an invisible form and made the aria-hidden below an
            // ARIA violation (aria-hidden must not wrap focusable content).
            //
            // Visibility is a discrete property, so it's switched with a
            // zero-duration transition rather than animated: instantly on open,
            // and delayed by the 300ms fade on close so the exit animation
            // still plays before the dialog is pulled out of the tree.
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 ${
              open
                ? "visible [transition:visibility_0s]"
                : "invisible pointer-events-none [transition:visibility_0s_300ms] motion-reduce:[transition:visibility_0s]"
            }`}
            aria-hidden={!open}
          >
        {/* Backdrop */}
        <div
          onClick={close}
          className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 motion-reduce:transition-none ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Dialog */}
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Contact Ray"
          // Transition opacity/transform only. `transition-all` also covered
          // `visibility`, so the wrapper's hidden→visible flip was animated
          // over 300ms here — leaving the dialog unfocusable for the whole
          // opening, which silently defeated the auto-focus.
          className={`relative w-full max-w-md rounded-2xl border border-[rgba(var(--border))] bg-[rgb(var(--background))] p-8 text-left text-[rgb(var(--foreground))] shadow-2xl transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none ${
            open ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-95 opacity-0"
          }`}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-lg opacity-60 transition hover:bg-primary/10 hover:opacity-100"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          {status === "sent" ? (
            <div className="flex flex-col items-center py-6 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m5 13 4 4L19 7" />
                </svg>
              </div>
              <h2 className="header-font text-2xl">Message sent!</h2>
              <p className="mt-2 opacity-70">{message}</p>
              <button
                type="button"
                onClick={close}
                className="btn btn-primary mt-6 px-8 py-3"
              >
                <span>Close</span>
              </button>
            </div>
          ) : (
            <>
              <h2 className="header-font text-2xl">
                Let&apos;s talk about your <span className="text-primary">project.</span>
              </h2>
              <p className="mt-2 text-sm opacity-70">
                Fill this out or email{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-primary">{siteConfig.email}</a>.
              </p>

              <form onSubmit={submit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="cm-name" className={labelCls}>Name</label>
                  <input ref={firstFieldRef} id="cm-name" name="name" required className={field} />
                </div>
                <div>
                  <label htmlFor="cm-email" className={labelCls}>Email</label>
                  <input id="cm-email" name="email" type="email" required className={field} />
                </div>
                <div>
                  <label htmlFor="cm-company" className={labelCls}>Company</label>
                  <input id="cm-company" name="company" required className={field} />
                </div>
                <div>
                  <label htmlFor="cm-notes" className={labelCls}>Notes</label>
                  <textarea id="cm-notes" name="notes" required rows={4} placeholder="Tell me about your project…" className={`${field} resize-none`} />
                </div>

                {/* Honeypot for spam bots */}
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

                {status === "error" && (
                  <p className="text-sm text-primary">{message}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn btn-primary w-full px-8 py-4 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span>{status === "sending" ? "Sending…" : "Send It!"}</span>
                </button>
              </form>
            </>
          )}
        </div>
          </div>,
          document.body,
        )}
    </>
  );
}
