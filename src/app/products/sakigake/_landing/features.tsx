import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import metrics from "@/data/metrics.json";

type Feature = {
  num: string;
  title: string;
  description: string;
  bullets: string[];
};

const features: Feature[] = [
  {
    num: "01",
    title: "/ship がコミットの手前で止める",
    description:
      "壊れたコードは `/ship` ゲートを通らない。AIエージェントに何度書かせても、規約から外れたまま history に残らない。",
    bullets: [
      "`/ship` 実行時に depcruise → test:run → typecheck → secret スキャンを順に実行、1つでも red なら停止。commit 時は pre-commit フック、push / PR 時は CI(全量)が独立に検証する三層ゲート(ADR-0007。`--no-verify` やフック未導入環境では pre-commit は効かない)",
      "CLAUDE.md(プロダクト指針)+ AGENTS.md(コード規約 + ユビキタス言語)で AI に context を共有",
      ".claude/agents/ に planner-researcher / implementer / tester / code-reviewer の 4 体、.claude/commands/ に /plan /review /ship",
      "顧客向けの CLAUDE.md.template + AGENTS.md.template も同梱、Cursor / Aider / Codex CLI でも portable(AGENTS.md 規格準拠)",
    ],
  },
  {
    num: "02",
    title: "DDD を「壊れない保証のエンジン」にする",
    description:
      "DDD アーキテクチャを dependency-cruiser で機械的に強制。「ルールがある」で終わらせず、本当に発火しているかまで監査する。",
    bullets: [
      "Bounded Context 分離(tenant / billing / 顧客のドメイン)、4 層レイヤリング(Domain / Application / Infrastructure / Presentation)",
      `dependency-cruiser で違反を検知(現状 ${metrics.depcruise.modules} modules / ${metrics.depcruise.violations} violations 維持)`,
      "過去に `no-domain-to-framework` ルールが `includeOnly` 設定の穴で発火していなかった(dormant rule)ことを自分で発見・修正した実例あり(ADR-0006)",
      "Composition Root pattern による context 間の clean な配線(`src/lib/composition/`)",
    ],
  },
  {
    num: "03",
    title: "日本語ファースト、かつ意思決定を記録し続ける",
    description:
      "日本語ファーストで全てを書き直したのは Sakigake が初めて。設計判断は ADR に、実装のふりかえりは plan に残す。",
    bullets: [
      "日本語ドキュメント、日本語コメント、日本語の ADR サンプル",
      `ADR テンプレ + 設計判断 ${metrics.adr.count} 本のサンプル(DDD / Clerk / 境界通信 / depcruise / Inngest / 可観測性)`,
      "`/ship` 実行後、plan ファイルに「ふりかえり(うまくいった点 / ハマった点 / CLAUDE.md 反映事項)」を追記する運用",
      "Stripe Payment Link での ¥ 決済導線(Subscription / Webhook / Customer Portal 統合はロードマップ)",
    ],
  },
];

/**
 * 3 つの差別化軸を 1 セクション = 1 カードで深掘り。
 *
 * 提示順は ①/ship コミットゲート ②DDD + dependency-cruiser の機械的強制(監査実績込み)
 * ③日本語ファースト + ADR/ふりかえり運用、で全ページ共通に統一する。
 * 「番号 + タイトル + 一行説明 + 具体的な箇条書き」の構成は読み手の
 * 認知負荷を下げ、各カードを skim しても訴求が落ちない。
 */
export function Features() {
  return (
    <section className="container mx-auto py-16 max-w-4xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">3 つの差別化</h2>
        <p className="text-muted-foreground mt-3">
          グローバル競合(ShipFast / Supastarter 等)と何が違うか
        </p>
      </div>

      <div className="space-y-6">
        {features.map((f) => (
          <Card key={f.num}>
            <CardHeader>
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-bold text-muted-foreground">
                  {f.num}
                </span>
                <div>
                  <CardTitle>{f.title}</CardTitle>
                  <CardDescription className="mt-1">
                    {f.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5 text-sm text-muted-foreground pl-12">
                {f.bullets.map((b, j) => (
                  <li key={j}>・{b}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
