const MemeCard = ({ data }) => {
  const { url, title, author } = data;

  return (
    <div
      style={{
        padding: "5px",
        margin: "5px",
        borderColor: "black",
        borderWidth: "1px",
        borderStyle: "solid",
      }}
    >
      <p>{title}</p>
      <img src={url} width={200} height={200} loading="lazy" />
      <p>{author}</p>
    </div>
  );
};

export default MemeCard;
