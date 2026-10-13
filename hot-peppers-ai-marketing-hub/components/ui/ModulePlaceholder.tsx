import { getNavItem } from "@/lib/navigation";
import { Badge } from "./Badge";
import { Card } from "./Card";
import { PageHeader } from "./PageHeader";

/**
 * Poctivý zástupný obsah modulu, který ještě není implementován.
 * Neobsahuje žádná tlačítka ani data, která by předstírala funkčnost.
 */
export function ModulePlaceholder({
  href,
  upcoming,
}: {
  href: string;
  upcoming: string[];
}) {
  const item = getNavItem(href);
  return (
    <>
      <PageHeader
        title={item.label}
        description={item.description}
        badge={<Badge variant="neutral">Připravuje se · blok {item.plannedBlock}</Badge>}
      />
      <Card title="Stav modulu">
        <p className="text-muted">
          Tento modul zatím není implementován. Stránka slouží jen jako místo v navigaci;
          nezobrazuje žádná data a nenabízí žádné akce.
        </p>
        <h3 className="mt-4 mb-2 text-sm font-semibold">Plánovaný obsah</h3>
        <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
          {upcoming.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </Card>
    </>
  );
}
