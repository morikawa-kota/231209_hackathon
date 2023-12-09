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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# Cheez


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

