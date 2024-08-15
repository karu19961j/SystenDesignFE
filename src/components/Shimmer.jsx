const Shimmer = () => {
  return Array(20)
    .fill(0)
    .map((_, i) => {
      return (
        <div
          key={i}
          style={{
            padding: "5px",
            margin: "5px",
            border: "1px solid #000",
            borderRadius: "15px",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "200px",
              background: "gray",
            }}
          ></div>
        </div>
      );
    });
};

export default Shimmer;
