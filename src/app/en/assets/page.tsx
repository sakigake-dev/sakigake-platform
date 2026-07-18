import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ICON_BUNDLES,
  ICON_PACKS,
  ICON_SAMPLER,
  type IconPack,
} from "@/data/products";

export const metadata: Metadata = {
  title: "Game Asset Store — 864 icons, transparent PNG",
  description:
    "864 game-ready icons across 9 packs. Five sizes (256–32px), sprite sheets with atlas.json, RPG Maker MV/MZ IconSets. Buy on itch.io.",
};

function PackCard({ pack }: { pack: IconPack }) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <a href={pack.itch} target="_blank" rel="noopener noreferrer">
        <Image
          src={pack.thumb}
          alt={pack.nameEn}
          width={600}
          height={600}
          className="aspect-square w-full object-cover"
        />
      </a>
      <CardContent className="p-4">
        <h3 className="text-sm font-semibold leading-snug">{pack.nameEn}</h3>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm font-bold">
            {pack.priceUsd === 0 ? "Free" : `$${pack.priceUsd}`}
          </p>
          <a
            href={pack.itch}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            View on itch.io
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * 素材ライン一覧（英語）。購入導線はitch.io。
 * 立ち絵はBOOTH限定（日本語ストア）のため本ページには載せない。
 */
export default function AssetsPageEn() {
  return (
    <>
      <SiteHeader lang="en" />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 pt-14 text-center sm:px-6">
          <Badge variant="secondary" className="mb-4">
            Transparent PNG · Commercial use OK · One-time purchase
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Game Asset Store
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Every pack ships with five sizes of individual PNGs (256–32px), a
            sprite sheet with atlas.json, and RPG Maker MV/MZ IconSets — ready
            for Unity, Godot, and RPG Maker. Sold on itch.io (USD). 日本語版は
            <a href="/products/assets" className="mx-1 underline underline-offset-4">
              こちら（BOOTH）
            </a>
            。
          </p>
        </section>

        {/* Free sampler */}
        <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
          <Card className="border-primary/30 bg-secondary/30">
            <CardContent className="flex flex-col items-center gap-4 p-6 sm:flex-row sm:p-8">
              <Image
                src={ICON_SAMPLER.thumb}
                alt={ICON_SAMPLER.nameEn}
                width={160}
                height={160}
                className="rounded-md border border-border"
              />
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-lg font-bold">
                  Start with the free sampler (12 icons)
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Representative icons from all 9 categories, in every output
                  format (5 sizes / atlas.json / IconSet). Check the quality and
                  specs before you buy.
                </p>
              </div>
              <a
                href={ICON_SAMPLER.itch}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 shrink-0 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Download free
              </a>
            </CardContent>
          </Card>
        </section>

        {/* Bundles & sets */}
        <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
          <h2 className="text-xl font-bold tracking-tight">Bundles &amp; sets</h2>
          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ICON_BUNDLES.map((p) => (
              <PackCard key={p.slug} pack={p} />
            ))}
          </div>
        </section>

        {/* Individual packs */}
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-xl font-bold tracking-tight">
            All 9 icon packs (96 icons each, $9.99)
          </h2>
          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ICON_PACKS.map((p) => (
              <PackCard key={p.slug} pack={p} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter lang="en" />
    </>
  );
}
