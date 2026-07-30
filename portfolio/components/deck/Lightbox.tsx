'use client';

import { useEffect } from 'react';

type LightboxProps = {
  src: string;
  alt: string;
  caption?: string;
  onClose: () => void;
};

/** Full-screen zoom overlay for architecture images. Rendered on demand. */
export default function Lightbox({ src, alt, onClose }: LightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      {/* stop propagation so clicking the image itself doesn't close */}
      <div className="lb-frame" onClick={(e) => e.stopPropagation()}>
        <button className="lb-close" aria-label="닫기" onClick={onClose}>
          ✕
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}
