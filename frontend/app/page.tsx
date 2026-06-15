// Client Componentに変更
"use client";

import { useState } from "react";

export default function Home() {

  const [selectCategory, setSelectedCategory]
  = useState("すべて");

  const [searchWord, setSearchWord]
  = useState("");


  // メール本体
  // ダミーデータ
  const mails = [
    {
      subject: "〇〇株式会社 面接のご案内",
      sender: "recruit@example.com",
      date: "2026/06/02",
      category: "就活",
    },
    {
      subject: "大学からのお知らせ",
      sender: "university@example.com",
      date: "2026/06/01",
      category: "大学",
    },
    {
      subject: "GitHub登録完了",
      sender: "github@example.com",
      date: "2026/05/31",
      category: "個人",
    },
    {
      subject: "株式会社ABC ES提出締切のお知らせ",
      sender: "abc_recruit@example.com",
      date: "2026/06/03",
      category: "就活",
    },
    {
      subject: "インターンシップ参加確定のお知らせ",
      sender: "intern@example.com",
      date: "2026/06/05",
      category: "就活",
    },
    {
      subject: "情報処理安全確保支援士試験の申込開始",
      sender: "ipa@example.com",
      date: "2026/06/07",
      category: "個人",
    },
    {
      subject: "Webプログラミング課題提出について",
      sender: "teacher@example.com",
      date: "2026/06/04",
      category: "大学",
    },
    {
      subject: "休講のお知らせ",
      sender: "office@example.com",
      date: "2026/06/06",
      category: "大学",
    },
    {
      subject: "Amazon.co.jp ご注文商品の発送について",
      sender: "amazon@example.com",
      date: "2026/06/02",
      category: "個人",
    },
    {
      subject: "クレジットカードご利用明細のお知らせ",
      sender: "card@example.com",
      date: "2026/06/08",
      category: "個人",
    },
    {
      subject: "期間限定セール開催中",
      sender: "shop@example.com",
      date: "2026/06/01",
      category: "その他",
    },
    {
      subject: "メールマガジン 2026年6月号",
      sender: "newsletter@example.com",
      date: "2026/06/09",
      category: "その他",
    },
    {
      subject: "〇〇株式会社 最終面接結果のご連絡",
      sender: "recruit2@example.com",
      date: "2026/06/10",
      category: "就活",
    },
  ];

  // メールフィルター（カテゴリー）
  const categoryfilterMails = mails.filter((mail) => {
    if(selectCategory === "すべて"){
      return true;
    }

    return mail.category === selectCategory
  });

  // メールフィルター（文字列検索）
  const filterMails = categoryfilterMails.filter((mail)=> {
    if (searchWord === "") {
      return true;
    }

    return (
      mail.subject.includes(searchWord) ||
      mail.sender.includes(searchWord) ||
      mail.date.includes(searchWord) ||
      mail.category.includes(searchWord)
    );
  })

  

  return (
    <html>
      <body>

        {/*ヘッダー */}
        <header>
          <h1>Job Mail Manager</h1>
          <nav>
            <button>
              メール一覧
            </button>
            <button>
              分類設定
            </button>
            <button>
              ログアウト
            </button>
          </nav>
        </header>

        {/* メインコンテンツ */}
        <main>

          { /* 検索欄 */}
          <br />
          &emsp;検索<input
            type="text"
            placeholder="メール件名,送信者,カテゴリで検索…"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
          />


          {/* カテゴリー分類ボタン */}  
          <br /><br />
          &emsp;カテゴリ選択
          <button onClick={() => setSelectedCategory("すべて")}>
            すべて
          </button>

          <button onClick={() => setSelectedCategory("就活")}>
            就活
          </button>
          
          <button onClick={() => setSelectedCategory("大学")}>
            大学
          </button>
          
          <button onClick={() => setSelectedCategory("個人")}>
            個人
          </button>

          {/* メール一覧 */}
          {filterMails.map((mail) => (
            <div key={mail.subject}>
              <h3>{mail.subject}</h3>
              <p>{mail.sender}</p>
              <p>{mail.date}</p>
              <p>{mail.category}</p>
              <hr />
            </div>
          ))}

        </main>
      </body>
    </html>
  );
}