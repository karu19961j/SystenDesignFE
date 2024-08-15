import { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

function Body() {
  const [data, setData] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);
  useEffect(() => {
    api();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      api();
    }
  };

  const api = async () => {
    setShowShimmer(true);
    const res = await fetch("https://meme-api.com/gimme/20");
    const data = await res.json();
    setShowShimmer(false);
    setData((memes) => [...memes, ...data.memes]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {data?.map((item, index) => {
        return <MemeCard key={index} data={item} />;
      })}
      {showShimmer && <Shimmer />}
    </div>
  );
}

export default Body;
