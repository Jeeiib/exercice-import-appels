import type { ReactNode } from "react";

export const metadata = { title: "Import des appels à projets" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
