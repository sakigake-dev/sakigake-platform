import { Card, CardContent } from "@/components/ui/card";
import metrics from "@/data/metrics.json";

type FAQ = {
  q: string;
  a: string;
};

const faqs: FAQ[] = [
  {
    q: "¥19,800 って高くないですか?",
    a: "100 時間の設定 × フリーランス単価 ¥3,000/h で換算すると ¥300,000 の節約。加えて 6 ヶ月後の書き直しコストもゼロ。Early Bird (¥9,800) なら 1 日分の作業で元が取れる計算です。",
  },
  {
    q: "『AIエージェントに壊されない』とは?",
    a: "`/ship` コマンドを実行すると depcruise(DDD レイヤー違反検知)→ test:run → typecheck → secret スキャンを順に実行し、1つでも red ならその場でコミットを止めます。加えて commit 時には pre-commit フック(depcruise + typecheck)、push / PR 時には CI(全量 + secret スキャン)が独立に走る三層構成です(ADR-0007)。ただし `--no-verify` やフック未導入環境では pre-commit は効かず、「絶対に壊せない」という保証ではありません。",
  },
  {
    q: "本当に動くんですか?",
    a: `GitHub repo を公開しており、現状 ${metrics.tests.passed} tests passing / ${metrics.depcruise.modules} modules / ${metrics.depcruise.violations} DDD violations を維持しています。/dashboard/projects で Server Component → Composition Root → UseCase → Supabase RLS の demo が実際に動きます。`,
  },
  {
    q: "ShipFast との違いは?",
    a: "① Claude Code / AI agent ネイティブ(`/ship` ゲートでコミット前に機械強制)② DDD アーキテクチャ + dependency-cruiser の機械的強制(dormant rule 監査込み)③ 日本語ファースト ④ Stripe Payment Link での ¥ 決済。上記の比較表を参照してください。",
  },
  {
    q: "サポートはありますか?",
    a: "ご購入時に共有するメールアドレス経由でのサポートを提供します。バグ修正 + メジャーバージョン以内のアップデートは無償で受けられます。コミュニティ機能(Discord/Slack)は需要を見ながら追加を検討します。",
  },
  {
    q: "更新が止まったらどうなりますか?",
    a: "買い切り型なので、購入時点の source code は手元に残ります。プラットフォーム依存(Clerk / Supabase / Stripe)はあっても、コード自体は永続的にあなたのものです。",
  },
  {
    q: "知らない人から買って大丈夫ですか?",
    a: "Sakigake repo そのものが品質の証拠です。加えて作者の GitHub(takepon7)で過去のプロダクト(kaigo-dx / biz-english-master 等)が確認可能。X (@sakigake_dev) で開発過程も公開中。",
  },
];

/**
 * FAQ セクション。
 *
 * 「買わない理由」を打ち消す 7 つの Q&A を網羅。
 * Card 1 つ = 1 Q&A の単純な構造で skim しやすくする。
 */
export function FAQ() {
  return (
    <section className="container mx-auto py-16 max-w-3xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">よくある質問</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((f, i) => (
          <Card key={i}>
            <CardContent className="pt-6">
              <h3 className="font-semibold">Q. {f.q}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                A. {f.a}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
