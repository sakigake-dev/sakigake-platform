import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ICON_PACKS } from "@/data/products";

export const metadata: Metadata = {
  title: { absolute: "Sakigake (魁) — Tools for indie developers" },
  description:
    "A product platform for indie developers: 864 game-ready icons (transparent PNG, multi-size, atlas.json) and an AI-agent-proof SaaS boilerplate.",
};

/**
 * プラットフォームのトップ（英語）。
 * 素材レーンはitch.io導線（/en/assets）、boilerplateは日本語ファーストの旨を明記。
 */
export default function HomeEn() {
  return (
    <>
      <SiteHeader lang="en" />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 pb-12 pt-16 text-center sm:px-6 sm:pt-24">
          <Badge variant="secondary" className="mb-4">
            Products for indie developers
          </Badge>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Tools that stay one step ahead of what you build.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground sm:text-lg">
            Sakigake (魁, &ldquo;pioneer&rdquo;) is a platform for solo
            developers — from game-ready asset packs to an AI-agent-proof SaaS
            boilerplate. One-time purchase, commercial use OK.
          </p>
        </section>

        <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-16 sm:px-6 md:grid-cols-2">
          <Card className="transition-shadow hover:shadow-lg">
            <CardContent className="flex h-full flex-col p-6 sm:p-8">
              <p className="text-sm font-medium text-muted-foreground">
                For game &amp; app developers
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight">
                Game Asset Store
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                864 transparent PNG icons across 9 categories (96 each). Five
                sizes from 256px to 32px, sprite sheets with atlas.json, and
                RPG Maker MV/MZ IconSets — drop them straight into Unity,
                Godot, or RPG Maker.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {ICON_PACKS.slice(0, 3).map((p) => (
                  <Image
                    key={p.slug}
                    src={p.thumb}
                    alt={p.nameEn}
                    width={200}
                    height={200}
                    className="rounded-md border border-border"
                  />
                ))}
              </div>
              <div className="mt-auto flex items-center gap-3 pt-6">
                <Link
                  href="/en/assets"
                  className="inline-flex h-10 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Browse assets
                </Link>
                <span className="text-xs text-muted-foreground">
                  Free 12-icon sampler available
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-shadow hover:shadow-lg">
            <CardContent className="flex h-full flex-col p-6 sm:p-8">
              <p className="text-sm font-medium text-muted-foreground">
                For SaaS builders
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight">
                SaaS Boilerplate &ldquo;Sakigake&rdquo;
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A Next.js SaaS boilerplate built to survive AI agents: DDD
                enforced by dependency-cruiser, and a /ship gate (depcruise /
                tests / typecheck / secret scan) that broken code cannot pass.
              </p>
              <ul className="mt-5 space-y-1.5 text-sm text-muted-foreground">
                <li>・Clerk auth, multi-tenancy, Stripe payment flow prewired</li>
                <li>・7 sample ADRs + Claude Code / Codex CLI ready</li>
                <li>
                  ・Docs are Japanese-first (code and structure are standard
                  TypeScript)
                </li>
              </ul>
              <div className="mt-auto flex items-center gap-3 pt-6">
                <Link
                  href="/products/sakigake"
                  className="inline-flex h-10 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  View details (JP)
                </Link>
                <span className="text-xs text-muted-foreground">
                  Early Bird ¥9,800 one-time
                </span>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="border-y border-border/60 bg-secondary/40">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 text-center sm:px-6 md:grid-cols-4">
            {[
              { n: "864", l: "transparent PNG icons" },
              { n: "9", l: "categories × 96 icons" },
              { n: "5 sizes", l: "256–32px + atlas.json" },
              { n: "One-time", l: "no subscription, commercial OK" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-2xl font-bold tracking-tight">{s.n}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter lang="en" />
    </>
  );
}
