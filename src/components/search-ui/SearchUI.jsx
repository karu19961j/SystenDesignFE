import { useCallback, useState, useEffect } from "react";

const SearchUI = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSerachResults] = useState([]);
  const [isResultsVisible, setIsResultsVisible] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = useCallback(async () => {
    if (cache[searchText]) {
      setSerachResults(cache[searchText]);
      return;
    }
    // Enable cores extension to make this API work
    const resp = await fetch(
      `https://www.google.com/complete/search?client=firefox&q=${searchText}`
    );
    const data = await resp.json();
    setCache((cache) => {
      return { ...cache, [searchText]: data[1] };
    });
    setSerachResults(data[1]);
  }, [searchText, cache]);

  useEffect(() => {
    const s = setTimeout(() => {
      fetchData();
    }, 200);
    return () => clearTimeout(s);
  }, [searchText, fetchData]);

  return (
    <div className="m-10">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="border border-black p-2 w-96"
        onFocus={() => setIsResultsVisible(true)}
        onBlur={() => setIsResultsVisible(false)}
      />
      {searchResults.length > 0 && isResultsVisible && (
        <ul className="p-2 border border-black w-96 shadow-md">
          {searchResults.map((sr) => {
            return (
              <li key={sr} className="hover:bg-gray-200 cursor-pointer">
                {sr}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SearchUI;
