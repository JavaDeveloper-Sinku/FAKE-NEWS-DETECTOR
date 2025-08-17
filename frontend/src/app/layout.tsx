import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fake News Detector",
  description: "Detect fake news using AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
