"use client";

import { useContactDrawer } from "@/components/contact/ContactDrawerProvider";

export default function Header() {
  const { open } = useContactDrawer();
  return (
    <header className="site-header">
      <a className="brand-mark" href="#top" aria-label="APTUS 시스템 홈"><span className="brand-dot" aria-hidden="true" />APTUS / SYSTEMS</a>
      <nav className="desktop-nav" aria-label="시스템 메뉴"><a href="#systems">MODULES</a><a href="#archive">ARCHIVE</a><a href="#capabilities">CAPABILITIES</a><a href="#process">PROCESS</a><a href="#contact">CONTACT</a></nav>
      <button className="header-cta" type="button" onClick={open}>INITIATE ↗</button>
    </header>
  );
}
