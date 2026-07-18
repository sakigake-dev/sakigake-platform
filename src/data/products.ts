/**
 * 全SKUの単一ソース。
 *
 * 販売はBOOTH(日本語/JPY)とitch.io(英語/USD)の外部ストアで行い、
 * 本サイトは導線のみを持つ。URL・価格を変更する場合はここだけを更新する。
 */

export type IconPack = {
  slug: string;
  nameJa: string;
  nameEn: string;
  priceJpy: number; // 0 = 無料
  priceUsd: number; // 0 = free
  booth: string | null; // BOOTHに存在しないSKUは null
  itch: string;
  thumb: string;
};

export type Tachie = {
  slug: string;
  nameJa: string;
  priceJpy: number;
  booth: string;
  thumb: string;
};

const b = (id: number) => `https://hitori-dougu.booth.pm/items/${id}`;
const i = (slug: string) => `https://takepon7.itch.io/${slug}`;

export const BOOTH_SHOP_URL = "https://hitori-dougu.booth.pm/";
export const ITCH_SHOP_URL = "https://takepon7.itch.io/";
export const BOILERPLATE_BOOTH_URL = b(8537679);

export const ICON_PACKS: IconPack[] = [
  {
    slug: "rpg_items",
    nameJa: "ファンタジーRPG アイテムアイコン 96種",
    nameEn: "Fantasy RPG Item Icon Pack (96 icons)",
    priceJpy: 980,
    priceUsd: 9.99,
    booth: b(8550482),
    itch: i("fantasy-rpg-item-icon-pack-96-icons-transparent-png"),
    thumb: "/products/icons/rpg_items.png",
  },
  {
    slug: "skills",
    nameJa: "ファンタジーRPG スキル・魔法アイコン 96種",
    nameEn: "Fantasy RPG Skill & Magic Icon Pack (96 icons)",
    priceJpy: 980,
    priceUsd: 9.99,
    booth: b(8553456),
    itch: i("fantasy-rpg-skill-magic-icon-pack-96-icons-transparent-png"),
    thumb: "/products/icons/skills.png",
  },
  {
    slug: "ui",
    nameJa: "ゲームUI・システムアイコン 96種",
    nameEn: "Game UI & System Icon Pack (96 icons)",
    priceJpy: 980,
    priceUsd: 9.99,
    booth: b(8589847),
    itch: i("game-ui-system-icon-pack-96-icons-transparent-png"),
    thumb: "/products/icons/ui.png",
  },
  {
    slug: "status",
    nameJa: "ステータス効果・バフデバフ アイコン 96種",
    nameEn: "Status Effect Buff/Debuff Icon Pack (96 icons)",
    priceJpy: 980,
    priceUsd: 9.99,
    booth: b(8562772),
    itch: i("status-effect-buffdebuff-icon-pack-96-icons-transparent-png"),
    thumb: "/products/icons/status.png",
  },
  {
    slug: "class",
    nameJa: "職業・クラスエンブレム アイコン 96種",
    nameEn: "Class & Job Emblem Icon Pack (96 icons)",
    priceJpy: 980,
    priceUsd: 9.99,
    booth: b(8617279),
    itch: i("class-job-emblem-icon-pack-96-icons-transparent-png"),
    thumb: "/products/icons/class.png",
  },
  {
    slug: "food",
    nameJa: "料理・食材アイコン 96種",
    nameEn: "Food & Cooking Icon Pack (96 icons)",
    priceJpy: 980,
    priceUsd: 9.99,
    booth: b(8617288),
    itch: i("food-cooking-icon-pack-96-icons-transparent-png"),
    thumb: "/products/icons/food.png",
  },
  {
    slug: "craft",
    nameJa: "農園・クラフト素材アイコン 96種",
    nameEn: "Farming & Crafting Icon Pack (96 icons)",
    priceJpy: 980,
    priceUsd: 9.99,
    booth: b(8617295),
    itch: i("farming-crafting-icon-pack-96-icons-transparent-png"),
    thumb: "/products/icons/craft.png",
  },
  {
    slug: "emotion",
    nameJa: "感情・吹き出し・演出アイコン 96種",
    nameEn: "Emotion & Speech Bubble Icon Pack (96 icons)",
    priceJpy: 980,
    priceUsd: 9.99,
    booth: b(8617301),
    itch: i("emotion-speech-bubble-icon-pack-96-icons-transparent-png"),
    thumb: "/products/icons/emotion.png",
  },
  {
    slug: "reward",
    nameJa: "クエスト・報酬・実績アイコン 96種",
    nameEn: "Quest, Reward & Achievement Icon Pack (96 icons)",
    priceJpy: 980,
    priceUsd: 9.99,
    booth: b(8590488),
    itch: i("quest-reward-achievement-icon-pack-96-icons-transparent-png"),
    thumb: "/products/icons/reward.png",
  },
];

export const ICON_BUNDLES: IconPack[] = [
  {
    slug: "bundle",
    nameJa: "全部入りバンドル（9パック・864種）",
    nameEn: "All-in-One Bundle (9 packs / 864 icons)",
    priceJpy: 4980,
    priceUsd: 49.99,
    booth: b(8617325),
    itch: i("all-in-one-icon-bundle-9-packs-864-icons-transparent-png"),
    thumb: "/products/icons/bundle.png",
  },
  {
    slug: "set_battle",
    nameJa: "RPGバトルセット（3パック・288種）",
    nameEn: "RPG Battle Icon Set (3 packs / 288 icons)",
    priceJpy: 0,
    priceUsd: 24.99,
    booth: null, // itch限定
    itch: i("rpg-battle-icon-set-3-packs-288-icons-transparent-png"),
    thumb: "/products/icons/set_battle.png",
  },
  {
    slug: "set_quest",
    nameJa: "RPGクエスト&UIセット（3パック・288種）",
    nameEn: "RPG Quest & UI Icon Set (3 packs / 288 icons)",
    priceJpy: 0,
    priceUsd: 24.99,
    booth: null,
    itch: i("rpg-quest-ui-icon-set-3-packs-288-icons-transparent-png"),
    thumb: "/products/icons/set_quest.png",
  },
  {
    slug: "set_cozy",
    nameJa: "Cozyクラフトセット（3パック・288種）",
    nameEn: "Cozy Crafting Icon Set (3 packs / 288 icons)",
    priceJpy: 0,
    priceUsd: 24.99,
    booth: null,
    itch: i("cozy-crafting-icon-set-3-packs-288-icons-transparent-png"),
    thumb: "/products/icons/set_cozy.png",
  },
];

export const ICON_SAMPLER: IconPack = {
  slug: "sampler_free",
  nameJa: "【無料】お試しサンプラー 12種",
  nameEn: "Free Icon Sampler (12 icons)",
  priceJpy: 0,
  priceUsd: 0,
  booth: b(8620558),
  itch: i("game-icon-sampler-12-free-icons-transparent-png"),
  thumb: "/products/icons/sampler_free.png",
};

export const TACHIE_PACKS: Tachie[] = [
  {
    slug: "starlit_librarian_mio",
    nameJa: "星灯りの魔導司書ミオ（表情差分10種）",
    priceJpy: 500,
    booth: b(8560654),
    thumb: "/products/tachie/starlit_librarian_mio.png",
  },
  {
    slug: "ol_yuki",
    nameJa: "オフィスの女性ユキ（表情差分10種）",
    priceJpy: 500,
    booth: b(8539292),
    thumb: "/products/tachie/ol_yuki.png",
  },
  {
    slug: "senpai_rei",
    nameJa: "クールな先輩レイ 黒髪ロング（表情差分10種）",
    priceJpy: 500,
    booth: b(8547262),
    thumb: "/products/tachie/senpai_rei.png",
  },
  {
    slug: "genki_kohai",
    nameJa: "元気な後輩 明るいボブ（表情差分10種）",
    priceJpy: 500,
    booth: b(8548015),
    thumb: "/products/tachie/genki_kohai.png",
  },
];
