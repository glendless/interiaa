import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interiaa",
  description: "ideas for your home",
  other: {
    'theme-color': '#AC8435',
    'color-scheme': 'light only',
    'og:image': 'https://cdn.dribbble.com/userupload/16592827/file/original-fefc7b09b9c0825f8202142853af216f.png?resize=850x850',
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
