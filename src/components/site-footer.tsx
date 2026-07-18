import Link from "next/link";
import { BOOTH_SHOP_URL, ITCH_SHOP_URL } from "@/data/products";

type Props = {
  lang?: "ja" | "en";
};

export function SiteFooter({ lang = "ja" }: Props) {
  const legal = lang === "ja" ? "特定商取引法に基づく表記" : "Legal (JP)";
  return (
    <footer className="mt-auto border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© {new Date().getFullYear()} Sakigake (魁) — sakigake.dev</p>
        <nav className="flex flex-wrap items-center gap-4">
          <a
            href={BOOTH_SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            BOOTH
          </a>
          <a
            href={ITCH_SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            itch.io
          </a>
          <a
            href="https://x.com/sakigake_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            X (@sakigake_dev)
          </a>
          <Link href="/legal" className="transition-colors hover:text-foreground">
            {legal}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
