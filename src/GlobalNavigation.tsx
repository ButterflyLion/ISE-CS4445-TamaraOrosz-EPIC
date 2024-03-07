import { Route, Routes } from "react-router-dom";

import Navigation from "./Navigation";
import About from "./About";
import Dashboard from "./Dashboard";
import { config } from "./GraphConfig";
import News from "./News";
import Login from "./Login";

function GlobalNavigation() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard config={config} />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default GlobalNavigation;
