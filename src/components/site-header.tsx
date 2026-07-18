import Link from "next/link";

type Props = {
  lang?: "ja" | "en";
};

/**
 * 全ページ共通ヘッダー。
 * lang に応じてナビのリンク先とラベル、言語切替リンクを出し分ける。
 */
export function SiteHeader({ lang = "ja" }: Props) {
  const nav =
    lang === "ja"
      ? [
          { href: "/products/assets", label: "ゲーム素材" },
          { href: "/products/sakigake", label: "SaaS Boilerplate" },
        ]
      : [
          { href: "/en/assets", label: "Game Assets" },
          { href: "/products/sakigake", label: "SaaS Boilerplate" },
        ];
  const home = lang === "ja" ? "/" : "/en";
  const langSwitch =
    lang === "ja"
      ? { href: "/en", label: "English" }
      : { href: "/", label: "日本語" };

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href={home} className="whitespace-nowrap font-semibold tracking-tight">
          Sakigake<span className="text-muted-foreground"> (魁)</span>
        </Link>
        <nav className="flex items-center gap-3 text-sm sm:gap-6">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href={langSwitch.href}
            className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            {langSwitch.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
