import About from "./components/About";
import Team from "./components/Team";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Body from "./components/Body";
import { useState } from "react";
import Accordion from "./components/Accordion";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
