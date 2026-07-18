import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BOOTH_SHOP_URL, ICON_PACKS, TACHIE_PACKS } from "@/data/products";

/**
 * プラットフォームのトップ（日本語）。
 * ユーザー種別で2レーンに分岐させ、各プロダクトの販売導線へ流す。
 */
export default function Home() {
  return (
    <>
      <SiteHeader lang="ja" />
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pb-12 pt-16 text-center sm:px-6 sm:pt-24">
          <Badge variant="secondary" className="mb-4">
            個人開発者のためのプロダクト
          </Badge>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            作りたいものに、
            <br />
            先回りする道具を。
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground sm:text-lg">
            Sakigake (魁)
            は、ひとりで作る開発者のためのプラットフォームです。ゲーム制作にすぐ使える素材から、AIエージェント前提のSaaS基盤まで。すべて買い切り、商用利用OK。
          </p>
        </section>

        {/* 2レーン分岐 */}
        <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-16 sm:px-6 md:grid-cols-2">
          {/* ゲーム・アプリ開発者レーン */}
          <Card className="group relative overflow-hidden transition-shadow hover:shadow-lg">
            <CardContent className="flex h-full flex-col p-6 sm:p-8">
              <p className="text-sm font-medium text-muted-foreground">
                ゲーム・アプリを作る人へ
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight">
                ゲーム素材ストア
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                透過PNGのアイコン素材 全864種（9カテゴリ×96種）と立ち絵素材。
                256〜32pxの多サイズ、スプライトシート+アトラスJSON、ツクールMV/MZ
                IconSet同梱で、Unity / Godot / ツクールにそのまま読み込めます。
              </p>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {ICON_PACKS.slice(0, 3).map((p) => (
                  <Image
                    key={p.slug}
                    src={p.thumb}
                    alt={p.nameJa}
                    width={200}
                    height={200}
                    className="rounded-md border border-border"
                  />
                ))}
              </div>
              <div className="mt-auto flex items-center gap-3 pt-6">
                <Link
                  href="/products/assets"
                  className="inline-flex h-10 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  素材を見る
                </Link>
                <span className="text-xs text-muted-foreground">
                  ¥0の無料サンプラーあり
                </span>
              </div>
            </CardContent>
          </Card>

          {/* SaaS開発者レーン */}
          <Card className="group relative overflow-hidden transition-shadow hover:shadow-lg">
            <CardContent className="flex h-full flex-col p-6 sm:p-8">
              <p className="text-sm font-medium text-muted-foreground">
                SaaSを立ち上げる人へ
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight">
                SaaS Boilerplate「Sakigake」
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                AIエージェントに書かせても、壊れない。DDD ×
                dependency-cruiserが構造を機械的に強制する日本語ファーストのNext.js
                SaaSボイラープレート。壊れたコードは /ship ゲートを通りません。
              </p>
              <ul className="mt-5 space-y-1.5 text-sm text-muted-foreground">
                <li>・/ship ゲート（depcruise / test / typecheck / secretスキャン）</li>
                <li>・Clerk認証・マルチテナント・Stripe決済導線を配線済み</li>
                <li>・ADRサンプル7本 + Claude Code / Codex CLI対応</li>
              </ul>
              <div className="mt-auto flex items-center gap-3 pt-6">
                <Link
                  href="/products/sakigake"
                  className="inline-flex h-10 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  詳細を見る
                </Link>
                <span className="text-xs text-muted-foreground">
                  Early Bird ¥9,800 買い切り
                </span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 実績・数字の帯 */}
        <section className="border-y border-border/60 bg-secondary/40">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 text-center sm:px-6 md:grid-cols-4">
            {[
              { n: "864", l: "アイコン素材（透過PNG）" },
              { n: `${TACHIE_PACKS.length}体`, l: "立ち絵（表情差分 各10種）" },
              { n: "5サイズ", l: "256〜32px + atlas.json" },
              { n: "買い切り", l: "月額サブスクなし・商用OK" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-2xl font-bold tracking-tight">{s.n}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* その他のツール */}
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <p className="text-sm text-muted-foreground">
            このほか、個人事業主向けの業務テンプレート（青色申告帳簿・複数販路の売上管理）も
            <a
              href={BOOTH_SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-1 underline underline-offset-4 hover:text-foreground"
            >
              BOOTHショップ
            </a>
            で販売しています。
          </p>
        </section>
      </main>
      <SiteFooter lang="ja" />
    </>
  );
}
