// Client Componentに変更
"use client";

import { useState } from "react";

type Mail = {
  id: number;
  subject: string;
  sender: string;
  date: string;
  category: string;
  body: string;
};

export default function Home() {

  // カテゴリー
  const [selectCategory, setSelectedCategory]
  = useState("すべて");

  // 検索文字
  const [searchWord, setSearchWord]
  = useState("");

  // メール詳細表示
  const [selectedMail, setSelectedMail] 
  = useState<Mail | null>(null);

  // メール本体
  // ダミーデータ
  const mails: Mail[] = [
    {
      id: 1,
      subject: "〇〇株式会社 面接のご案内",
      sender: "recruit@example.com",
      date: "2026/06/02",
      category: "就活",
      body: "この度は弊社の選考にご応募いただきありがとうございます。面接日程についてご案内いたします。6月10日(水) 14:00よりオンラインにて実施いたします。"
    },
    {
      id: 2,
      subject: "大学からのお知らせ",
      sender: "university@example.com",
      date: "2026/06/01",
      category: "大学",
      body: "学生各位。前期履修登録期間についてお知らせします。登録期間は6月1日から6月7日までです。忘れずに手続きを行ってください。"
    },
    {
      id: 3,
      subject: "GitHub登録完了",
      sender: "github@example.com",
      date: "2026/05/31",
      category: "個人",
      body: "GitHubへのアカウント登録が完了しました。メールアドレス認証を行うことで、すべての機能をご利用いただけます。"
    },
    {
      id: 4,
      subject: "株式会社ABC ES提出締切のお知らせ",
      sender: "abc_recruit@example.com",
      date: "2026/06/03",
      category: "就活",
      body: "エントリーシート提出締切が近づいております。提出期限は6月8日23:59です。期限までにご提出ください。"
    },
    {
      id: 5,
      subject: "インターンシップ参加確定のお知らせ",
      sender: "intern@example.com",
      date: "2026/06/05",
      category: "就活",
      body: "夏季インターンシップへの参加が確定いたしました。当日の詳細は後日改めてご連絡いたします。"
    },
    {
      id: 6,
      subject: "情報処理安全確保支援士試験の申込開始",
      sender: "ipa@example.com",
      date: "2026/06/07",
      category: "個人",
      body: "令和8年度秋期情報処理安全確保支援士試験の申込受付を開始しました。受験を希望される方はお早めにお申し込みください。"
    },
    {
      id: 7,
      subject: "Webプログラミング課題提出について",
      sender: "teacher@example.com",
      date: "2026/06/04",
      category: "大学",
      body: "次回授業までにWebプログラミング課題を提出してください。提出期限は6月11日23:59です。"
    },
    {
      id: 8,
      subject: "休講のお知らせ",
      sender: "office@example.com",
      date: "2026/06/06",
      category: "大学",
      body: "担当教員の都合により、6月12日の講義は休講となります。補講日程は後日お知らせします。"
    },
    {
      id: 9,
      subject: "Amazon.co.jp ご注文商品の発送について",
      sender: "amazon@example.com",
      date: "2026/06/02",
      category: "個人",
      body: "ご注文いただいた商品を発送いたしました。お届け予定日は6月4日です。配送状況はマイページからご確認いただけます。"
    },
    {
      id: 10,
      subject: "クレジットカードご利用明細のお知らせ",
      sender: "card@example.com",
      date: "2026/06/08",
      category: "個人",
      body: "2026年5月分のご利用明細が確定しました。ご請求金額は12,840円です。詳細は会員ページをご確認ください。"
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
      mail.category.includes(searchWord) ||
      mail.body.includes(searchWord)
    );
  })

  // メール詳細画面
  if(selectedMail){
    return(
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

          {/* メール詳細 */}
          
          {selectedMail ? (
            <div>

              <h2>件名：{selectedMail.subject}</h2>
              <h3>送信者：{selectedMail.sender}</h3>
              <h3>日付：{selectedMail.date}</h3>
              <h3>カテゴリ：{selectedMail.category}</h3>
              <p>本文：{selectedMail.body}</p>
              <br />
              <button onClick={() => setSelectedMail(null)}>
                戻る
              </button>

            </div>
          ) : (
            <div>
              {filterMails.map((mail) => (
                <div onClick={() => setSelectedMail(mail)}>
                  <h3>{mail.subject}</h3>
                  <p>{mail.sender}</p>
                </div>
              ))}
            </div>
          )}


        </main>
      </body>
    </html>
    )
  }
  

  // メール一覧表示画面
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
            <div 
              key={mail.id}
              onClick={() => setSelectedMail(mail)}
            >
              <h3>件名：{mail.subject}</h3>
              <p>送信者：{mail.sender}</p>
              {/* <p>日時：{mail.date}</p>
              <p>カテゴリ：{mail.category}</p>
              <p>本文：null</p> */}
              <hr />
            </div>
          ))}


        </main>
      </body>
    </html>
  );
}