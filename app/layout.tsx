import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interiaa",
  description: "ideas for your home",
  other: {
    'theme-color': '#AC8435',
    'color-scheme': 'light only',
    // 'og:image': '',
    'og:type': 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><link
        rel="icon"
        href="/interiaa.svg"
        type="image/<generated>"
        sizes="<generated>"
      /></head>
      <body className="min-h-screen bg-secondary">{children}</body>
    </html>
  );
}
