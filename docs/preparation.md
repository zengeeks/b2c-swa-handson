# 🛠️ 開発の準備

このハンズオンの準備として、以下3点を説明します。

- Microsoft Azure
- GitHub
- ローカルの開発環境

<br>

## Microsoft Azure

このハンズオンでは、Microsoft Azure で以下のリソースを使います。これらを作成できるサブスクリプションの用意が必要です。

- リソースグループ
- Static Web Apps
- Cosmos DB
- Azure AD B2C

サブスクリプションの作成方法が不明な場合は、マイクロソフトのサイトよりご確認ください。

- [Azure の無料アカウントを今すぐ作成 | Microsoft Azure](https://azure.microsoft.com/ja-jp/free/)


## GitHub

このハンズオンでは、GitHub でコードの管理と GitHub Actions を利用します。  
アカウントがない場合は GitHub のサイトよりサインアップします。

- [GitHub](https://github.com/)


## 開発環境の準備

開発環境をセットアップとして、2パターンのセットアップ方法を記載します。どちらかでセットアップしてハンズオンを進めてください。

- ローカルの開発環境をセットアップ
- Codespaces で開発環境をセットアップ

### ローカルの開発環境をセットアップ

#### Visual Studio Code のインストール

エディタとして Visual Studio Code を利用します。

- [Download Visual Studio Code](https://code.visualstudio.com/download)

また、Visual Studio Code の拡張機能として以下の2つのインストールが必要です。

- [Azure Functions for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions)
- [Astro support for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)


#### Node.js のインストール

Node.js を利用します。v16 または v18 の環境があれば問題ありません。  
環境がない場合は、以下公式サイトより推奨のバージョンのインストールをします。 (2023年4月時点では `18.15.0 LTS`)。  

- [Node.js®](https://nodejs.org/ja)


### Codespaces で開発環境をセットアップ

ローカル環境にライブラリやツールをインストールすることなく、GitHub の VM 環境である Codespaces を利用したモダンな開発環境でのセットアップ方法は、以下リンクをご参照ください。

- [Codespaces で開発環境をセットアップ](./codespaces-setup.md)

---

[📋 目次へ戻る](../README.md)
