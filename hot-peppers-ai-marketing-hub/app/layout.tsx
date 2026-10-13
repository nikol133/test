import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s · HOT PEPPERS AI Marketing Hub",
    default: "HOT PEPPERS AI Marketing Hub",
  },
  description: "Interní nástroj pro evidenci kampaní, hodnocení nabídek a AI podporu marketingu.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="cs" className="h-full antialiased">
      <body className="min-h-full">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
