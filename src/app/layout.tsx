import type { Metadata } from "next";
import "@trilogy-ds/styles/dist/default/trilogy.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Test technique – Intégration Landing Page",
  description: "Test technique front-end",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
