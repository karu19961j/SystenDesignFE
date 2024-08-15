import { useState } from "react";
import AccordionItem from "./AccordionItem";

const data = [
  {
    title: "Accordion Item #1",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
  },
  {
    title: "Accordion Item #2",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
  },
  {
    title: "Accordion Item #3",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div
      style={{
        width: "50%",
        margin: "5px auto",
      }}
    >
      {data.map((n, i) => {
        return (
          <AccordionItem
            key={i}
            title={n.title}
            body={n.body}
            isOpen={openIndex === i}
            setIsOpen={() => {
              setOpenIndex(openIndex === i ? null : i);
            }}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
