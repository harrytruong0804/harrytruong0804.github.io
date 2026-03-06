import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "harrytruong",
  description: "Learning artifacts & visual notes by Harry Truong",
  authors: [{ name: "Harry Truong", url: "https://github.com/harrytruong0804" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="scanlines">
        {children}
      </body>
    </html>
  );
}
