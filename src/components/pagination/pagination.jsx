import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const LIMIT = 10;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [noOfPages, setNoOfPages] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    const resp = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${LIMIT * currentPage}&select=title,price,thumbnail,description,discountPercentage`,
    );
    const data = await resp.json();
    setProducts(data.products);
    setNoOfPages(Math.ceil(data.total / LIMIT));
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {products?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div
        style={{
          padding: "10px",
          cursor: "pointer",
        }}
      >
        {currentPage > 0 && (
          <span
            onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
          >
            Prev
          </span>
        )}
        {[...Array(noOfPages).keys()].map((pN) => (
          <span
            key={pN}
            style={{
              padding: 4,
            }}
            onClick={() => setCurrentPage(pN)}
          >
            {pN + 1}
          </span>
        ))}
        {currentPage < noOfPages - 1 && (
          <span
            onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
          >
            Next
          </span>
        )}
      </div>
    </div>
  );
};

export default Pagination;
