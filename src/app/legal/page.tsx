import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "特定商取引法に基づく表記 | Sakigake (魁)" },
  description: "Sakigake（sakigake.dev）の特定商取引法に基づく表記です。",
};

// TODO(legal): 返金ポリシーは事業判断。ユーザー確認後に確定

type Row = {
  label: string;
  value: React.ReactNode;
};

const rows: Row[] = [
  {
    label: "販売事業者",
    value: "武田　遼介（個人事業主）",
  },
  {
    label: "運営統括責任者",
    value: "武田　遼介",
  },
  {
    label: "所在地",
    value: (
      <>
        〒170-0013
        <br />
        東京都豊島区東池袋2丁目62番8号 BIGオフィスプラザ池袋1206
      </>
    ),
  },
  {
    label: "電話番号",
    value: (
      <>
        お問い合わせは原則メールにてお願いいたします。
        <br />
        電話番号については、請求があった場合に遅滞なく開示いたします。
      </>
    ),
  },
  {
    label: "メールアドレス",
    value: (
      <a
        href="mailto:takeponn7@gmail.com"
        className="text-foreground underline hover:opacity-70"
      >
        takeponn7@gmail.com
      </a>
    ),
  },
  {
    label: "販売 URL",
    value: (
      <a
        href="https://sakigake.dev"
        className="text-foreground underline hover:opacity-70"
      >
        https://sakigake.dev
      </a>
    ),
  },
  {
    label: "販売価格",
    value: (
      <ul className="space-y-1">
        <li>各商品の販売ページに表示します。</li>
        <li>SaaS Boilerplate：Early Bird ¥9,800 / Standard ¥19,800 / Agency ¥39,800（いずれも税込）</li>
        <li>ゲーム素材：BOOTH・itch.io の各商品ページに表示（¥0〜¥4,980）</li>
      </ul>
    ),
  },
  {
    label: "商品代金以外の必要料金",
    value: "通信費はお客様のご負担となります。クレジットカード決済手数料は当方が負担します。",
  },
  {
    label: "お支払い方法",
    value: (
      <>
        クレジットカード決済（Stripe 経由）
        <br />
        対応ブランド：Visa、Mastercard、American Express、JCB
      </>
    ),
  },
  {
    label: "お支払い時期",
    value: "購入手続き時（Stripe 決済ページでのお支払い）に確定します。",
  },
  {
    label: "商品の引き渡し時期",
    value: (
      <>
        決済確認後、ご連絡いただく GitHub
        ユーザー名の確認をもって、遅滞なく private repository へご招待します。
        <br />
        通常、ユーザー名のご連絡から24時間以内にご招待メールをお送りします。
      </>
    ),
  },
  {
    label: "返品・キャンセルについて",
    value: (
      <>
        デジタルコンテンツ（ソースコード）の性質上、お客様都合による返品・返金は原則としてお受けしておりません。
        <br />
        ただし、当方の責めに帰すべき瑕疵（商品説明と著しく異なる等）が認められる場合は、個別にご対応いたします。
        <br />
        ご不明な点はご購入前にお問い合わせください。
      </>
    ),
  },
  {
    label: "動作環境",
    value: "最新版の Google Chrome、Safari、Microsoft Edge、Firefox を推奨します。",
  },
];

/**
 * 特定商取引法に基づく表記ページ。
 *
 * 事業者情報は biz-english-master/src/app/legal/page.tsx の方式（住所明記 + 電話は請求時開示）に準拠。
 * 返金ポリシーはデジタル商品の一般的な文面を採用（TODO コメントにて要確認マーク）。
 */
export default function LegalPage() {
  return (
    <main className="min-h-screen bg-background px-4 sm:px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground underline"
          >
            ← Sakigake トップへ
          </Link>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
          特定商取引法に基づく表記
        </h1>

        <div className="border border-border rounded-lg overflow-hidden">
          <dl>
            {rows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 px-6 py-5 ${
                  i !== rows.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <dt className="font-semibold text-sm text-foreground sm:col-span-1">
                  {row.label}
                </dt>
                <dd className="text-sm text-muted-foreground leading-relaxed sm:col-span-2">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          表記更新日：2026年6月12日
        </p>
      </div>
    </main>
  );
}
