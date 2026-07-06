'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from '@/components/deck/Lightbox';

type ArchImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** short caption shown under the thumbnail and in the lightbox */
  caption?: string;
};

/** Architecture diagram thumbnail that opens a full-screen lightbox on click. */
export default function ArchImage({ src, alt, width, height, caption }: ArchImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <figure className="arch">
      <button
        type="button"
        className="arch-thumb"
        aria-label={`${alt} 확대`}
        onClick={() => setOpen(true)}
      >
        <span className="zoom">⤢ 확대</span>
        <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 760px) 100vw, 50vw" />
      </button>
      {caption ? <figcaption className="arch-cap">{caption}</figcaption> : null}
      {open ? (
        <Lightbox src={src} alt={alt} caption={caption} onClose={() => setOpen(false)} />
      ) : null}
    </figure>
  );
}
