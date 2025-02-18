import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}
function Accordion() {
  return (
    <div className="accordion">
      {faqs.map((el, i) => (
        <AccordionItem title={el.title} text={el.text} num={i} key={i} />
      ))}
    </div>
  );
}
function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
// function Accordion() {
//   return (
//     <div className="accordion">
//       {faqs.map((question) => (
//         <Items question={question} key={question.title} />
//       ))}
//     </div>
//   );

//   function Items({ question }) {
//     const [selectedQ, setSelectedQ] = useState(null);
//     function handleClick(title) {
//       setSelectedQ(question.title);
//     }

//     return (
//       <div className="item">
//         <div onClick={() => handleClick(question.title)}>
//           {question.title === selectedQ ? question.title : question.text}
//         </div>
//       </div>
//     );
//   }
// }
