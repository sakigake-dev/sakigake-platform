import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  GAME_URL,
  ICON_BUNDLES,
  ICON_PACKS,
  ICON_SAMPLER,
  TACHIE_PACKS,
  type IconPack,
} from "@/data/products";

export const metadata: Metadata = {
  title: "ゲーム素材ストア — アイコン864種・立ち絵",
  description:
    "透過PNGのゲームアイコン素材 全864種（9カテゴリ×96種）と立ち絵素材。多サイズ・スプライトシート・ツクールIconSet同梱。購入はBOOTHで。",
};

const yen = (n: number) => `¥${n.toLocaleString("ja-JP")}`;

function PackCard({ pack }: { pack: IconPack }) {
  const url = pack.booth ?? pack.itch;
  const storeLabel = pack.booth ? "BOOTHで見る" : "itch.ioで見る（英語）";
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Image
          src={pack.thumb}
          alt={pack.nameJa}
          width={600}
          height={600}
          className="aspect-square w-full object-cover"
        />
      </a>
      <CardContent className="p-4">
        <h3 className="text-sm font-semibold leading-snug">{pack.nameJa}</h3>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm font-bold">
            {pack.booth
              ? pack.priceJpy === 0
                ? "無料"
                : yen(pack.priceJpy)
              : `$${pack.priceUsd}`}
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {storeLabel}
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * 素材ラインの一覧（日本語）。購入導線はBOOTH。
 * itch限定SKU（3点セット）はitchへ送る。英語版は /en/assets。
 */
export default function AssetsPage() {
  return (
    <>
      <SiteHeader lang="ja" />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 pt-14 text-center sm:px-6">
          <Badge variant="secondary" className="mb-4">
            透過PNG・商用利用OK・買い切り
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            ゲーム素材ストア
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            全アイコンに 256〜32px の5サイズ個別PNG、スプライトシート+atlas.json、RPGツクールMV/MZ用
            IconSet を同梱。Unity / Godot / ツクールにそのまま読み込めます。購入はBOOTH（日本語・円決済）で、
            英語圏の方は
            <a href="/en/assets" className="mx-1 underline underline-offset-4">
              itch.io版のページ
            </a>
            をどうぞ。
          </p>
        </section>

        {/* 素材で作った無料ゲーム(実演デモ導線) */}
        <section className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
          <a
            href={GAME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg border border-primary/40 bg-secondary/40 px-5 py-4 text-center text-sm transition-colors hover:bg-secondary/60 sm:text-base"
          >
            🎮 このアイコンで作った無料ブラウザゲーム「Icon Alchemy」で遊べます —
            <span className="ml-1 font-medium underline underline-offset-4">
              素材の実力をその場で体験
            </span>
          </a>
        </section>

        {/* 無料サンプラー */}
        <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
          <Card className="border-primary/30 bg-secondary/30">
            <CardContent className="flex flex-col items-center gap-4 p-6 sm:flex-row sm:p-8">
              <Image
                src={ICON_SAMPLER.thumb}
                alt={ICON_SAMPLER.nameJa}
                width={160}
                height={160}
                className="rounded-md border border-border"
              />
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-lg font-bold">
                  まずは無料サンプラーから（12種・¥0）
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  9カテゴリの代表アイコンと全出力規格（5サイズ / atlas.json /
                  IconSet）を無料で試せます。品質と規格を確認してから購入できます。
                </p>
              </div>
              <a
                href={ICON_SAMPLER.booth ?? ICON_SAMPLER.itch}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 shrink-0 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                無料でダウンロード
              </a>
            </CardContent>
          </Card>
        </section>

        {/* バンドル・セット */}
        <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
          <h2 className="text-xl font-bold tracking-tight">
            バンドル・セット（まとめてお得）
          </h2>
          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ICON_BUNDLES.map((p) => (
              <PackCard key={p.slug} pack={p} />
            ))}
          </div>
        </section>

        {/* 単品9パック */}
        <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
          <h2 className="text-xl font-bold tracking-tight">
            アイコンパック 全9種（各96種・{yen(980)}）
          </h2>
          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ICON_PACKS.map((p) => (
              <PackCard key={p.slug} pack={p} />
            ))}
          </div>
        </section>

        {/* 立ち絵 */}
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-xl font-bold tracking-tight">
            立ち絵素材（表情差分10種・各{yen(500)}）
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            TRPGセッション・配信・フリーゲーム向け。透過PNG
            3000px。無料お試し版（表情3種）つき。
          </p>
          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TACHIE_PACKS.map((t) => (
              <Card
                key={t.slug}
                className="overflow-hidden transition-shadow hover:shadow-lg"
              >
                <a href={t.booth} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={t.thumb}
                    alt={t.nameJa}
                    width={600}
                    height={600}
                    className="aspect-square w-full object-cover"
                  />
                </a>
                <CardContent className="p-4">
                  <h3 className="text-sm font-semibold leading-snug">
                    {t.nameJa}
                  </h3>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-sm font-bold">{yen(t.priceJpy)}</p>
                    <a
                      href={t.booth}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      BOOTHで見る
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter lang="ja" />
    </>
  );
}
