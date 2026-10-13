"use client";

import { PageHeader } from "@/components/ui/PageHeader";

export default function ErrorPage({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <>
      <PageHeader
        title="Něco se pokazilo"
        description="Stránku se nepodařilo zobrazit. Zkuste to prosím znovu."
      />
      {error.digest ? (
        <p className="mb-4 text-sm text-muted">Kód chyby: {error.digest}</p>
      ) : null}
      <button
        type="button"
        onClick={retry}
        className="rounded-lg bg-accent-strong px-4 py-2 text-sm font-semibold text-white hover:bg-accent"
      >
        Zkusit znovu
      </button>
    </>
  );
}
