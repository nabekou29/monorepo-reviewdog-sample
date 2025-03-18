# モノレポ環境でreviewdog (eslint)を効率的に実行するサンプルリポジトリ

このリポジトリは、モノレポ環境でreviewdog (eslint)を効率的に実行する方法を示すサンプルです。

## リポジトリ構造

```
monorepo-reviewdog-sample/
├── .github/
│   └── workflows/
│       └── reviewdog.yml       # GitHub Actions用のワークフロー設定
├── apps/
│   └── web/                    # App Router使用のNext.jsアプリ
│       ├── src/
│       │   └── app/
│       │       ├── globals.css
│       │       ├── layout.tsx
│       │       └── page.tsx
│       ├── eslint.config.mjs
│       ├── next-env.d.ts
│       ├── package.json
│       ├── postcss.config.js
│       ├── tailwind.config.js
│       └── tsconfig.json
├── packages/
│   ├── eslint-config/          # ESLint設定をまとめるパッケージ
│   │   ├── src/
│   │   │   ├── base.js
│   │   │   ├── index.js
│   │   │   ├── next.js
│   │   │   ├── react.js
│   │   │   └── typescript.js
│   │   └── package.json
│   └── ui/                     # 共通UIコンポーネントパッケージ
│       ├── src/
│       │   ├── Button.tsx
│       │   ├── Card.tsx
│       │   └── index.ts
│       ├── eslint.config.mjs
│       ├── package.json
│       └── tsconfig.json
├── package.json                # ルートpackage.json
├── pnpm-workspace.yaml         # pnpmワークスペース設定
└── reviewdog.yml               # reviewdog設定ファイル
```

## 実装のポイント

1. **パッケージごとの独立したESLint設定**:

   - 各パッケージは独自のeslint.config.mjsを持ち、共通設定パッケージから適切な設定を継承しています。
   - これにより、パッケージの特性に合わせた設定が可能になります。

2. **共通ESLint設定パッケージ**:

   - 基本、TypeScript、React、Next.jsなど、異なるタイプの設定を提供しています。
   - 各パッケージはこれらの設定を必要に応じて継承できます。

3. **reviewdogの効率的な実行**:

   - ルートのreviewdog.ymlで一元管理し、各パッケージのlintコマンドを実行します。
   - GitHub Actionsでは、PRに対してreviewdogを実行し、コードレビューコメントを自動生成します。
   - ローカルでも同様の設定で実行できるようにしています。

4. **pnpmワークスペース**:
   - pnpmのワークスペース機能を使用して、パッケージ間の依存関係を効率的に管理します。
   - `-r`フラグを使用して、すべてのパッケージに対してコマンドを実行します。

## セットアップ

### 前提条件

- Node.js (v18以上)
- pnpm (v8以上)
- reviewdog

### reviewdogのインストール

reviewdogはGo言語で書かれたツールであり、npmからインストールすることはできません。以下の方法でインストールしてください。

#### Homebrew (macOS)

```bash
brew install reviewdog/tap/reviewdog
```

#### Go

```bash
go install github.com/reviewdog/reviewdog/cmd/reviewdog@latest
```

#### GitHub Releases

[GitHub Releases](https://github.com/reviewdog/reviewdog/releases)からバイナリをダウンロードしてください。

### 依存関係のインストール

```bash
pnpm install
```

## 使用方法

### ローカルでのlint実行

```bash
# すべてのパッケージに対してlintを実行
pnpm lint

# reviewdogを使用してlintを実行（ローカル環境）
pnpm lint:reviewdog:local
```

### GitHub Actionsでの実行

プルリクエストを作成すると、GitHub Actionsワークフローが自動的に実行され、reviewdogがコードレビューコメントを生成します。

## 注意点

実際に使用する前に、以下の点に注意してください：

1. reviewdogのインストールが必要です（ローカルで実行する場合）
2. 依存関係のインストールが必要です（`pnpm install`）
3. 実際のプロジェクトに合わせて、ESLint設定やパッケージ構成をカスタマイズしてください
