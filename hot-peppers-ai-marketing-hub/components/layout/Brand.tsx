import Link from "next/link";

// Textový placeholder značky do dodání schválených brandových assetů
// (žádné logo ani fotografie – PROJECT_SPEC.md, kap. 3).
export function Brand({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link href="/dashboard" onClick={onNavigate} className="block leading-tight">
      <span className="block bg-gradient-to-r from-accent to-pink bg-clip-text text-lg font-extrabold tracking-[0.2em] text-transparent">
        HOT PEPPERS
      </span>
      <span className="block text-xs font-medium uppercase tracking-widest text-muted">
        AI Marketing Hub
      </span>
    </Link>
  );
}
