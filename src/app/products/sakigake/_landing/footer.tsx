import Link from "next/link";

/**
 * LP フッター。
 *
 * コピーライトと特商法リンクを最小限に記載する。
 * 特定商取引法に基づく表記は直販（通信販売）を行う場合に掲載義務がある。
 */
export function Footer() {
  return (
    <footer className="border-t border-border mt-0">
      <div className="container mx-auto max-w-5xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© 2026 武田 遼介（Sakigake）</p>
        <nav className="flex gap-6">
          <Link
            href="/legal"
            className="hover:text-foreground transition-colors"
          >
            特定商取引法に基づく表記
          </Link>
        </nav>
      </div>
    </footer>
  );
}
