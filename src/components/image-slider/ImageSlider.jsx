import { useEffect, useState } from "react";

const IMAGES = [
  "https://images.pexels.com/photos/34950/pexels-photo.jpg",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
  "https://images.unsplash.com/photo-1533750349088-cd871a92f312",
];

const ImageSlider = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      handleRightClick();
    }, 5000);
    return () => clearInterval(t);
  }, []);
  const handleLeftClick = () => {
    active === 0
      ? setActive(IMAGES.length - 1)
      : setActive((active) => active - 1);
  };

  const handleRightClick = () => {
    setActive((active) => (active + 1) % IMAGES.length);
  };
  return (
    <div>
      <div
        style={{
          margin: 2,
          padding: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          onClick={handleLeftClick}
          style={{
            fontSize: "50px",
            cursor: "pointer",
          }}
        >
          👈
        </span>
        <img
          style={{
            width: "800px",
            height: "500px",
          }}
          src={IMAGES[active]}
          alt="img"
        />
        <span
          onClick={handleRightClick}
          style={{
            fontSize: "50px",
            cursor: "pointer",
          }}
        >
          👉
        </span>
      </div>
    </div>
  );
};

export default ImageSlider;
