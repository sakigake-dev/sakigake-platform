# sakigake-platform

sakigake.dev のプラットフォームサイト（個人開発者向けプロダクトのハブ）。

- `/` … 日本語トップ。2レーン分岐（ゲーム素材 / SaaS Boilerplate）
- `/en` … 英語トップ
- `/products/assets` … ゲーム素材ストア（購入導線=BOOTH）
- `/en/assets` … Game Asset Store（購入導線=itch.io）
- `/products/sakigake` … SaaS Boilerplate LP（旧 sakigake.dev トップから移設）
- `/legal` … 特定商取引法に基づく表記

商品データ（価格・BOOTH/itch URL・サムネ）は `src/data/products.ts` に一元管理。
SKUの追加・価格変更はこのファイルだけを更新する。

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build
```
