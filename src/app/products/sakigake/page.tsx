import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Comparison } from "./_landing/comparison";
import { Features } from "./_landing/features";
import { FAQ } from "./_landing/faq";
import { FinalCTA } from "./_landing/final-cta";
import { Footer } from "./_landing/footer";
import { Hero } from "./_landing/hero";
import { PainPromise } from "./_landing/pain-promise";
import { Pricing } from "./_landing/pricing";

export const metadata: Metadata = {
  title: "AIエージェントに書かせても、壊れない SaaS Boilerplate",
  description:
    "DDD × dependency-cruiser が構造を機械的に強制する、日本語ファーストの Next.js SaaS Boilerplate。壊れたコードは /ship ゲートを通らない。",
};

/**
 * Sakigake Boilerplate のLP（旧 sakigake.dev トップから移設）。
 * セクション実装は _landing/ 配下（旧リポジトリからの移植）に委譲する。
 */
export default function BoilerplateLP() {
  return (
    <>
      <SiteHeader lang="ja" />
      <main>
        <Hero />
        <PainPromise />
        <Features />
        <Comparison />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
