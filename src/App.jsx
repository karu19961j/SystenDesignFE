import About from "./components/About";
import Team from "./components/Team";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Body from "./components/Body";
import { useState } from "react";
import Accordion from "./components/Accordion";
import Comments from "./components/comments/Comments";
import ImageSlider from "./components/image-slider/ImageSlider";
import Pagination from "./components/pagination/pagination";
import Youtube from "./components/Youtube/Youtube";

function App() {
  const [lang, setLang] = useState("en");
  return (
    <div>
      <header
        style={{
          display: "flex",
          background: "black",
          color: "#fff",
          padding: 5,
        }}
      >
        <nav
          style={{
            justifyContent: "space-between",
          }}
        >
          <a href="/">Home </a>
          <a href="/about">About </a>
          <a href="/team">Team </a>
          <a href="/login">Login </a>
          <a href="/accordion">Accordion</a>
          <a href="/comments">Comments</a>
          <a href="/image-slider">Image Slider</a>
          <a href="/pagination">Pagination</a>
          <a href="/Youtube">Youtube</a>
        </nav>
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="es">Spanish</option>
          <option value="ru">Russian</option>
        </select>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/team" element={<Team />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/image-slider" element={<ImageSlider />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/youtube" element={<Youtube />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
