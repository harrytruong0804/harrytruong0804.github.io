export interface Dispatch {
  /** YYYY-MM-DD */
  date: string;
  /** one line, past tense */
  text: string;
  /** optional link (opens in a new tab) */
  href?: string;
}

// Newest entries can go anywhere — getDispatches() sorts by date descending.
export const dispatches: Dispatch[] = [
  {
    date: "2026-07-03",
    text: "Became a contributor to CesiumGS/cesium-omniverse — PR #779 merged.",
    href: "https://github.com/CesiumGS/cesium-omniverse/pull/779",
  },
  {
    date: "2026-07-01",
    text: "Admitted to the Master's program at the National Economics University (NEU) — K35, 2026–2028.",
    href: "https://sdh.neu.edu.vn/bai-viet/thong-bao-nhap-hoc-cao-hoc-k35-2026-2028-tuyen-sinh-dot-1-nam-2026__615.html",
  },
];

export function getDispatches(): Dispatch[] {
  return [...dispatches].sort((a, b) => (a.date < b.date ? 1 : -1));
}
