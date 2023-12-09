This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## 開発環境
Next 13.5.6 (App Router)


## ディレクトリ
### public配下
アプリで使用する画像やjsonなどのデータを格納する。

### src/app配下
プロダクトコードを配置する。

* (page)  
Viewやルーティングに関するコードを配置する。

* components  
共通のUIを配置する。

* lib   
使用しているライブラリ固有のコードで、初期化や設定のコードなどデータ取得に絡まないコードを配置する。

* api  
APIを配置する。

* hooks
特定のライフサイクルイベントや状態変更に対してカスタムロジックを実行するコードを管理する。

* middleware.ts
リクエストとレスポンスの間の処理を制御するコードを管理する。

* utils  
グローバルで使える便利な関数を配置する。（表示のフォーマットやタイムゾーンの設定など）

