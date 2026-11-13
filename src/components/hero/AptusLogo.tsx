import type { SVGProps } from "react";

type AptusLogoProps = SVGProps<SVGSVGElement> & {
  /** Enables the service-to-symbol mapping used by the scroll sequence. */
  labelled?: boolean;
};

/**
 * Inline, deliberately separated APTUS logo.
 * The three symbol polygons, wordmark, divider and sub-label each retain a
 * stable id so GSAP can address them independently in the hero timeline.
 */
export default function AptusLogo({ labelled = true, ...props }: AptusLogoProps) {
  return (
    <svg
      viewBox="0 0 900 250"
      role="img"
      aria-labelledby={labelled ? "aptus-logo-title aptus-logo-description" : undefined}
      {...props}
    >
      {labelled && <>
        <title id="aptus-logo-title">APTUS</title>
        <desc id="aptus-logo-description">APTUS software solution logo</desc>
      </>}

      <g id="logo-symbol" fill="currentColor">
        <polygon id="logo-part-1" data-service="website" points="0,226 89,24 173,24 84,226" />
        <polygon id="logo-part-2" data-service="mobile" points="101,226 190,24 276,24 187,226" />
        <polygon id="logo-part-3" data-service="web-to-app" points="190,24 276,24 382,226 295,226" />
      </g>

      <g id="logo-wordmark" fill="currentColor">
        <text
          x="421"
          y="118"
          fontFamily="Geist, Arial, sans-serif"
          fontSize="104"
          fontWeight="700"
          letterSpacing="-5"
        >
          APTUS
        </text>
      </g>

      <line id="logo-divider" x1="512" y1="150" x2="512" y2="215" stroke="currentColor" strokeWidth="5" />
      <text
        id="logo-subtext"
        x="532"
        y="201"
        fill="currentColor"
        fontFamily="Geist, SUIT, Pretendard, Arial, sans-serif"
        fontSize="37"
        fontWeight="400"
        letterSpacing="-1.6"
      >
        software solution
      </text>
    </svg>
  );
}
