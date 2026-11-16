export type ArchiveProject = {
  slug: string;
  imagePath?: string;
  title: string;
  type: string;
  scope: string;
  tech: string[];
};

// Add an image file to public/projects and set imagePath to its public URL.
// Example: imagePath: "/projects/field-01.webp".
export const archiveProjects: ArchiveProject[] = [
  {
    slug: "field-01",
    title: "FIELD / 01",
    type: "WEB EXPERIENCE",
    scope: "반응형 · 문의 흐름 · 콘텐츠 구조",
    tech: ["Next.js", "UI system"],
  },
  {
    slug: "aptus-app",
    title: "APTUS APP",
    type: "MOBILE FLOW",
    scope: "로그인 · 푸시 · API 연결",
    tech: ["Flutter", "API"],
  },
  {
    slug: "web-app",
    title: "WEB → APP",
    type: "WEB-TO-APP",
    scope: "WebView · 앱 쉘 · 스토어 준비",
    tech: ["WebView", "Packaging"],
  },
];
