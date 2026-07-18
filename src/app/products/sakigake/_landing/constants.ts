/**
 * LP の外部リンク定数。
 *
 * 決済リンク (Stripe Payment Link) と問い合わせフォーム (Tally) の URL を
 * ここ 1 箇所に集約する。LP の直リンクボタンとメールテンプレ
 * (`ops/email-templates/`) は同一の Payment Link を指す。
 */

// Stripe Payment Links(本番)。LP の購入ボタンが指す決済リンク。
// 参考用に ops/email-templates/README.md にも一覧があるので、変更時はそちらも更新する。
export const EARLY_BIRD_PAYMENT_URL =
  "https://buy.stripe.com/3cI00i79D4Go1d8edo7IY00";

export const STANDARD_PAYMENT_URL =
  "https://buy.stripe.com/fZu8wO3Xrfl22hc9X87IY01";

export const AGENCY_PAYMENT_URL =
  "https://buy.stripe.com/eVq5kC79Da0I094fhs7IY03";

/**
 * 質問・相談用の Tally フォーム。
 * 購入導線ではなく、購入前の問い合わせ窓口として使用する。
 */
export const CONTACT_FORM_URL =
  "https://tally.so/r/44p9bk?utm_source=lp&utm_medium=pricing";
