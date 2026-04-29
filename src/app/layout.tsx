import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eigen Terminal — Public AI intelligence for builders",
  description:
    "A public-facing AI intelligence terminal for builders. Track live signals, developing trends, bottlenecks, and the parts of the AI landscape that matter to your work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
