export interface Link {
  /** which Work section it belongs to */
  kind: "research" | "building";
  /** shown as the link text */
  label: string;
  href: string;
  /** one short line of context, shown beside the label */
  note: string;
}

// Author presence elsewhere on the web. Add a line = add an object.
export const links: Link[] = [
  {
    kind: "research",
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=Ct5f6qIAAAAJ&hl=en",
    note: "Publications and citations.",
  },
  {
    kind: "building",
    label: "easydictation.app",
    href: "https://easydictation.app",
    note: "A product I build and run.",
  },
];
