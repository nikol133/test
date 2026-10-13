import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";

export default function NotFound() {
  return (
    <>
      <PageHeader title="Stránka nenalezena" description="Požadovaná stránka neexistuje." />
      <Link href="/dashboard" className="text-accent underline underline-offset-4">
        Zpět na přehled
      </Link>
    </>
  );
}
