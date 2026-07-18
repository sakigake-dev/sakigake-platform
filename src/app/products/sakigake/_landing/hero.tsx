import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import metrics from "@/data/metrics.json";

/**
 * Hero — H1 + サブ + プライマリ / セカンダリ CTA + ソーシャル・プルーフ・バッジ。
 *
 * H1 は「AIエージェントに書かせても壊れない」という中核訴求を一発で示す。
 * サブコピーで根拠(/ship ゲート + DDD × dependency-cruiser)を示す。
 */
export function Hero() {
  return (
    <section className="container mx-auto py-20 max-w-4xl">
      <div className="flex items-center gap-2 mb-6">
        <Badge variant="secondary">v0.1.0</Badge>
        <Badge variant="outline">Early Bird 受付中</Badge>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
        AIエージェントに書かせても、壊れない。
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl">
        壊れたコードは /ship ゲートを通らない——depcruise / テスト / typecheck / secret スキャン、1つでも赤ならコミット不可。DDD × dependency-cruiser が構造を機械的に強制する、日本語ファーストの SaaS ボイラープレート。
      </p>

      <div className="flex flex-wrap gap-3 mt-8">
        <Link
          href="#pricing"
          className={buttonVariants({ size: "lg" })}
        >
          Early Bird ¥9,800 で購入
        </Link>
        <Link
          href="https://github.com/sakigake-dev/sakigake"
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          GitHub で見る
        </Link>
      </div>

      <div className="flex flex-wrap gap-2 mt-10">
        <Badge>/ship ゲート</Badge>
        <Badge>{metrics.depcruise.violations} DDD violations</Badge>
        <Badge>{metrics.tests.passed} tests passing</Badge>
        <Badge>日本語ファースト</Badge>
        <Badge>Claude Code Native</Badge>
        <Badge>買い切り型</Badge>
      </div>
    </section>
  );
}
