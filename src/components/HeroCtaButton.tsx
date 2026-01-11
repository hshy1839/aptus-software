"use client";

import Button from "./Button";
import { useContactDrawer } from "@/components/contact/ContactDrawerProvider";

export default function HeroCtaButton() {
  const { open } = useContactDrawer();

  return <Button onClick={open}>프로젝트 문의하기</Button>;
}
