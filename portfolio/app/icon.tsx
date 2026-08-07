import { ImageResponse } from 'next/og';

/**
 * Tab icon, generated at build time — no asset file to keep in sync.
 * The teal matches the deck's --accent (styles/deck.css).
 */
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0F766E',
          color: '#FFFFFF',
          fontSize: 17,
          fontWeight: 700,
          letterSpacing: '-0.04em',
          borderRadius: 7,
        }}
      >
        SG
      </div>
    ),
    size,
  );
}
