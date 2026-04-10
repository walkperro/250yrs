"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
  className?: string;
};

type LightboxGalleryProps = {
  images: readonly GalleryImage[];
  sizes: string;
  gridClassName?: string;
  itemClassName: string;
  defaultImageClassName: string;
};

export function LightboxGallery({
  images,
  sizes,
  gridClassName = "",
  itemClassName,
  defaultImageClassName,
}: LightboxGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const isOpen = openIndex !== null;

  const showImage = useCallback((index: number) => {
    const lastIndex = images.length - 1;

    if (index < 0) {
      setOpenIndex(lastIndex);
      return;
    }

    if (index > lastIndex) {
      setOpenIndex(0);
      return;
    }

    setOpenIndex(index);
  }, [images.length]);

  const openGallery = (index: number) => {
    openerRef.current = triggerRefs.current[index];
    setOpenIndex(index);
  };

  const closeGallery = useCallback(() => {
    setVisible(false);
    window.setTimeout(() => {
      setOpenIndex(null);
      openerRef.current?.focus();
    }, 180);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeGallery();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showImage((openIndex ?? 0) - 1);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showImage((openIndex ?? 0) + 1);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    window.setTimeout(() => {
      setVisible(true);
      closeButtonRef.current?.focus();
    }, 10);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeGallery, isOpen, openIndex, showImage]);

  const activeImage = openIndex !== null ? images[openIndex] : null;

  return (
    <>
      <div className={gridClassName}>
        {images.map((image, index) => (
          <button
            key={image.src}
            ref={(node) => {
              triggerRefs.current[index] = node;
            }}
            type="button"
            onClick={() => openGallery(index)}
            className={`${itemClassName} block w-full cursor-zoom-in text-left transition duration-300 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:ring-offset-0`}
            aria-label={`Open gallery image ${index + 1} of ${images.length}: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              quality={90}
              sizes={sizes}
              className={image.className ?? defaultImageClassName}
            />
          </button>
        ))}
      </div>

      {isOpen && activeImage ? (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/88 px-3 py-4 backdrop-blur-sm transition duration-200 sm:px-6 sm:py-8 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeGallery}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeImage.alt} enlarged view`}
        >
          <div
            className={`relative flex h-full max-h-[92vh] w-full max-w-6xl items-center justify-center transition duration-200 ${
              visible ? "scale-100" : "scale-[0.985]"
            }`}
            onClick={(event) => event.stopPropagation()}
            onTouchStart={(event) => {
              touchStartX.current = event.changedTouches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              if (touchStartX.current === null) return;

              const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
              const deltaX = touchEndX - touchStartX.current;

              if (Math.abs(deltaX) > 40) {
                showImage((openIndex ?? 0) + (deltaX > 0 ? -1 : 1));
              }

              touchStartX.current = null;
            }}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeGallery}
              className="absolute right-0 top-0 z-20 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-sm text-white/80 transition hover:border-brand-gold hover:text-brand-cream"
              aria-label="Close gallery"
            >
              Close
            </button>

            <button
              type="button"
              onClick={() => showImage((openIndex ?? 0) - 1)}
              className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/10 bg-black/50 px-4 py-3 text-xl text-white/80 transition hover:border-brand-gold hover:text-brand-cream sm:block"
              aria-label="Previous image"
            >
              ←
            </button>

            <div className="relative h-full max-h-[82vh] w-full max-w-5xl">
              <Image src={activeImage.src} alt={activeImage.alt} fill sizes="100vw" className="object-contain" />
            </div>

            <button
              type="button"
              onClick={() => showImage((openIndex ?? 0) + 1)}
              className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/10 bg-black/50 px-4 py-3 text-xl text-white/80 transition hover:border-brand-gold hover:text-brand-cream sm:block"
              aria-label="Next image"
            >
              →
            </button>

            <div className="absolute bottom-0 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/70 sm:hidden">
              <button
                type="button"
                onClick={() => showImage((openIndex ?? 0) - 1)}
                className="rounded-full px-2 py-1 text-base text-white/80"
                aria-label="Previous image"
              >
                ←
              </button>
              <span>{openIndex + 1} / {images.length}</span>
              <button
                type="button"
                onClick={() => showImage((openIndex ?? 0) + 1)}
                className="rounded-full px-2 py-1 text-base text-white/80"
                aria-label="Next image"
              >
                →
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
