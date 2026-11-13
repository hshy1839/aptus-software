import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
export function PrimaryButton({children,...props}:PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>){return <button className="ds-button ds-primary" {...props}>{children}</button>}
export function SecondaryButton({children,...props}:PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>){return <button className="ds-button ds-secondary" {...props}>{children}</button>}
export function EyebrowLabel({children}:{children:React.ReactNode}){return <p className="ds-eyebrow">{children}</p>}
export function SectionHeading({children}:{children:React.ReactNode}){return <h2 className="ds-heading">{children}</h2>}
export function PrecisionDivider(){return <hr className="ds-divider"/>}
export function DiagonalMask({children}:{children:React.ReactNode}){return <div className="ds-cut">{children}</div>}
export function ImageRevealFrame({children}:{children:React.ReactNode}){return <div className="ds-frame">{children}</div>}
export function SlideControls(){return <div className="ds-controls"><button aria-label="Previous sample">←</button><span>01 / 03</span><button aria-label="Next sample">→</button></div>}
