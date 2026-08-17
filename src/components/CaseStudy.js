"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export function CaseStudyHeader({ number, kind, title, dek, meta }) {
  return (
    <header className="border-b border-rule pb-14 pt-20 md:pt-28">
      <p className="label mb-6">
        {number} — {kind}
      </p>
      <h1 className="font-display max-w-[18ch] text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
        {title}
      </h1>
      <p className="mt-7 max-w-[54ch] text-[1.25rem] leading-[1.5] text-ink-muted">
        {dek}
      </p>
      <dl className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
        {meta.map(([term, value]) => (
          <div key={term}>
            <dt className="label mb-1">{term}</dt>
            <dd className="annotation text-ink">{value}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}

export function Step({ number, title, annotations = [], children }) {
  return (
    <section className="border-b border-rule py-14 md:py-20">
      <div className="flex flex-col md:grid md:grid-cols-[260px_1fr] md:gap-x-14">
        {/* Annotation gutter */}
        <div className="order-2 mt-8 border-l-2 border-rule pl-4 md:order-1 md:mt-0 md:border-0 md:pl-0">
          {annotations.map((a, i) => (
            <aside
              key={i}
              className={`mb-7 ${
                a.type === "DECISION" ? "decision-annotation" : ""
              }`}
            >
              <p className="label mb-1">{a.type}</p>
              <p className="annotation">{a.text}</p>
            </aside>
          ))}
        </div>

        {/* Main column */}
        <div className="order-1 md:order-2">
          <p className="label mb-3">{number}</p>
          <h2 className="font-display mb-6 text-[1.75rem] font-semibold leading-tight tracking-[-0.01em]">
            {title}
          </h2>
          <div className="max-w-[66ch] space-y-5">{children}</div>
        </div>
      </div>
    </section>
  );
}

export function Figure({
  src,
  alt,
  caption,
  number,
  wide = false,
  width = 1200,
  height = 1550,
}) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      // Keep focus inside the dialog — it only has one control.
      if (e.key === "Tab") {
        e.preventDefault();
        closeRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <>
      <figure className={wide ? "my-10" : "my-8 max-w-[66ch]"}>
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Enlarge: ${alt}`}
          className="block w-full cursor-zoom-in border border-rule bg-paper-sunk transition-colors duration-150 hover:border-connection"
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="block h-auto w-full"
          />
        </button>
        <figcaption className="annotation mt-3">
          {number} — {caption}
        </figcaption>
      </figure>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/92 p-4 md:p-10"
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 rounded-sm bg-paper px-4 py-2 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-ink transition-colors duration-150 hover:bg-highlight md:right-8 md:top-8"
          >
            Close
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] overflow-auto bg-paper"
            style={{ maxWidth: `min(92vw, ${width}px)` }}
          >
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="block h-auto w-full"
            />
          </div>

          <p className="annotation absolute bottom-4 left-1/2 -translate-x-1/2 text-paper-sunk md:bottom-8">
            {number} — {caption}
          </p>
        </div>
      )}
    </>
  );
}

export function FigureRow({ children, cols = 3 }) {
  return (
    <div
      className={`my-10 grid gap-6 ${
        cols === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"
      }`}
    >
      {children}
    </div>
  );
}