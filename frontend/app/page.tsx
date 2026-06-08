export default function Home() {
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
    },
     {
      subject: "GitHub登録完了",
      sender: "github@example.com",
      date: "2026/05/31",
    },
  ];

  var selectCategory;

  function changeCategory(category: string){
    selectCategory = category;
  }

  // function setSelectedCategory(category: string){
  //   pass;
  // }

  return (
    <main>
      <h1>Job Mail Manager</h1>

      <button onClick={() => changeCategory("すべて")}>
        すべて
      </button>

      <button onClick={() => changeCategory("就活")}>
        就活
      </button>
      
      <button onClick={() => changeCategory("大学")}>
        大学
      </button>
      
      <button onClick={() => changeCategory("個人")}>
        個人
      </button>


      {mails.map((mail) => (
        <div key={mail.subject}>
          <h3>{mail.subject}</h3>
          <p>{mail.sender}</p>
          <p>{mail.date}</p>
          <p>{mail.category}</p>
          <hr />
        </div>
      ))}
    </main>
  );
}