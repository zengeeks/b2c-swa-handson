# 簡単に認証を実現 🔗 Azure AD B2C と Azure Static Web Apps の認証連携ハンズオン

## 💫 概要

静的コンテンツや Web アプリのホストに最適な **Azure Static Web Apps** と、コンシューマーユーザー向け認証基盤の **Azure AD B2C** を使い、

**コードをほぼ書かずに認証連携を実現するハンズオン** です。  

投票キャンペーンの静的サイトの開発ハンズオンを通して、認証連携を学びます。  
また、Azure と GitHub のテクノロジーを活用して最小限のコードで API を実装やデータアクセス、認証画面のカスタマイズや、GitHub Actions を使った Azure Static Web Apps の CI/CD も体験できます。

![img](./docs/images/overview.png)

## 📄 ハンズオンの構成

全体構成は以下となります。

| タイトル                                                                                   | 概要 |
| ------------------------------------------------------------------------------------------ | ---- |
| [🧪 静的サイトと API を実装](./docs/setup-application.md)                       | 投票キャンペーンのサイトとその API を実装します。 |
| [🧪 Azure Static Web Apps を構成する](./docs/setup-static-web-apps.md)         | 投票キャンペーンサイトをホストする Azure Static Web Apps を構成します。 |
| [🧪 Azure AD B2C テナントを構成する](./docs/setup-ad-b2c.md)                    | 認証基盤として利用する Azure AD B2C を構成します。|
| [🧪 静的サイトに認証を組み込む](./docs/setup-auth.md)                            | 投票キャンペーンサイトに認証を組み込みます。 |
| [🧪 Cosmos DB リソース作成・設定](./docs/setup-cosmos-db.md)                    | データベースのリソースを作成します。|
| [🧪 ログインユーザーに依存するデータを作成・取得する](./docs/create-authenticated-data.md) | 投票キャンペーンサイトの API からデータベースにアクセスする実装をします。 |
| [💎 Appendix: Azure AD B2C のビルトイン画面のカスタマイズ](./docs/customize-ad-b2c-builtin-ui.md) | Azure AD B2C の認証画面をカスタマイズします。|
| [💎 Appendix: ログインユーザーに依存しないデータを取得する](./docs/get-public-data.md)                 | データ取得の応用パターンを実装します。|



## 🛠️ 事前準備

このハンズオンは、開発の環境・ツールとして以下を利用します。

- Visual Studio Code
- Microsoft Azure
- GitHub

ハンズオンをはじめるにあたっては、以下をご参照して環境を準備します。

- [🛠️ 開発の準備](./docs/preparation.md)

## 🧑‍💻 Let's Get Started

[🧪 静的サイトと API を実装](./docs/setup-application.md) からハンズオンを開始しましょう。

<br>

---

[⏭️ 「静的サイトと API を実装」へ進む](./docs/setup-application.md)
