// Client Componentに変更
"use client";

import { useState } from "react";

export default function Home() {

  const [selectCategory, setSelectedCategory]
  = useState("すべて");


  // メール本体
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
      category:"大学",
    },
     {
      subject: "GitHub登録完了",
      sender: "github@example.com",
      date: "2026/05/31",
      category:"個人",
    },
  ];

  // メールフィルター
  const filterMails = mails.filter((mail) => {
    if(selectCategory === "すべて"){
      return true;
    }

    return mail.category === selectCategory
  });

  return (
    <html>
      <body>

        <main>
          <h1>Job Mail Manager</h1>

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