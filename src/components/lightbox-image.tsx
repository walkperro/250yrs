"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setVisible(false);
        window.setTimeout(() => setOpen(false), 180);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    window.setTimeout(() => setVisible(true), 10);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const close = () => {
    setVisible(false);
    window.setTimeout(() => setOpen(false), 180);
  };

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
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-white/80 transition hover:border-brand-gold hover:text-brand-cream"
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
