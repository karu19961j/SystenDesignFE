const AccordionItem = ({ title, body, isOpen, setIsOpen }) => {
  return (
    <div
      style={{
        border: "1px solid #000",
      }}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          cursor: "pointer",
          padding: 2,
          background: "#ededed",
          display: "flex",
          fontWeight: "bold",
          justifyContent: "space-between"
        }}
      >
        <span>{title}</span>
        <span>👇</span>
      </div>
      {isOpen && <div style={{
        padding: 2
      }}>{body}</div>}
    </div>
  );
};

export default AccordionItem;
