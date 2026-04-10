"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type LightboxImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  containerClassName: string;
  imageClassName?: string;
};

export function LightboxImage({
  src,
  alt,
  priority = false,
  sizes = "100vw",
  containerClassName,
  imageClassName = "object-cover",
}: LightboxImageProps) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);
  const openTimeoutRef = useRef<number | null>(null);

  const closeLightbox = useCallback(() => {
    setVisible(false);

    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
    }

    closeTimeoutRef.current = window.setTimeout(() => {
      setOpen(false);
      closeTimeoutRef.current = null;
    }, 180);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    openTimeoutRef.current = window.setTimeout(() => {
      setVisible(true);
      closeButtonRef.current?.focus();
      openTimeoutRef.current = null;
    }, 10);

    return () => {
      if (openTimeoutRef.current) {
        window.clearTimeout(openTimeoutRef.current);
        openTimeoutRef.current = null;
      }

      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }

      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeLightbox, open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`${containerClassName} block w-full cursor-zoom-in text-left transition duration-300 hover:brightness-105`}
        aria-label={`Open larger view of ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={imageClassName}
        />
      </button>

      {open ? (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/88 px-4 py-6 backdrop-blur-sm transition duration-200 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeLightbox();
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} enlarged view`}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-20 min-h-11 rounded-full border border-white/10 bg-black/55 px-4 py-2 text-sm text-white/80 transition hover:border-brand-gold hover:text-brand-cream focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:ring-offset-0"
            style={{ touchAction: "manipulation" }}
            aria-label="Close image"
          >
            Close
          </button>

          <div
            className={`relative h-full max-h-[88vh] w-full max-w-6xl transition duration-200 ${
              visible ? "scale-100" : "scale-[0.985]"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <Image src={src} alt={alt} fill sizes="100vw" className="object-contain" />
          </div>
        </div>
      ) : null}
    </>
  );
}
