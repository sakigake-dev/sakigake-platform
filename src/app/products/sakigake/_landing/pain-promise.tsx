import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import metrics from "@/data/metrics.json";

/**
 * Pain → Promise セクション。
 *
 * ターゲット ("副業で SaaS 開発中の senior エンジニア") が抱える
 * 痛みを左側で言語化し、Sakigake の答えを右側で対応させる。
 * 2 列対比で「これは自分の話だ」と即座に分からせる。
 */
export function PainPromise() {
  return (
    <section className="container mx-auto py-16 max-w-4xl">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-destructive">あるある</CardTitle>
            <CardDescription>
              日本で SaaS を立ち上げるたびに繰り返される消耗
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>・認証 / 課金 / マルチテナントの設定で 100 時間溶ける</li>
              <li>・既存 boilerplate を買ったが、6 ヶ月後にスケールできずに書き直し</li>
              <li>・英語圏 boilerplate は Stripe JP 対応がない、ドキュメントが読みにくい</li>
              <li>・Claude Code に何度書かせても、コードベースが drift する</li>
              <li>・DDD を学びたいが、実際に動く商用品質の example がない</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sakigake の答え</CardTitle>
            <CardDescription>
              「AIエージェントに書かせても壊れない」を構造で保証する
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ CLAUDE.md + AGENTS.md + 4 subagents で AI が drift しない。壊れたコードは <strong>`/ship` ゲート(depcruise / test / typecheck / secret スキャン)</strong>を通らないためコミットできない</li>
              <li>✓ DDD アーキテクチャを <strong>dependency-cruiser + `/ship` ゲートで機械的に強制</strong>。過去には強制ルール自体が発火していなかった箇所(dormant rule)を発見・修正した実例あり(ADR-0006)</li>
              <li>✓ 日本語ドキュメント、Stripe Payment Link での ¥ 決済、{metrics.adr.count} 本の ADR サンプル + ふりかえり運用付き</li>
              <li>✓ 認証(Clerk Organizations)/ テナント同期(Clerk Webhook)は配線済。課金は Stripe Payment Link 決済導線 + Subscription ドメインモデル(Webhook / Portal 統合、Inngest 非同期化は ADR-0005 のロードマップ)</li>
              <li>✓ `src/contexts/example/` に動く Project 実装(VO / UseCase / RLS まで)</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
