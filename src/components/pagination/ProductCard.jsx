const ProductCard = ({
  title,
  price,
  description,
  thumbnail,
  discountPercentage,
}) => {
  return (
    <div
      style={{
        margin: "1rem",
        padding: "1rem",
        border: "1px solid black",
      }}
    >
      <img
        atl={title}
        src={thumbnail}
        style={{
          height: "12rem",
          objectFit: "fill",
        }}
      />
      <h1
        style={{
          padding: "2rem",
          fontStyle: "bold",
          width: "72px"
        }}
      >
        {title}
      </h1>
      <h2
        style={{
          padding: "1rem",
        }}
      >
        ${price} - discount of {discountPercentage}%{" "}
      </h2>
      <p
        style={{
          padding: "1rem",
          width: "96px"
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default ProductCard;
