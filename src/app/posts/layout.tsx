import SiteTopbar from "@/components/site-topbar";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteTopbar />
      {children}
    </>
  );
}
