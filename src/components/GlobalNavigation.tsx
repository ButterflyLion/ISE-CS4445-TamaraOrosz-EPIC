import { Route, Routes } from "react-router-dom";

import Navigation from "./Navigation";
import About from "./About";
import Dashboard from "./Dashboard";
import { config } from "./GraphConfig";
import News from "./News";
import SignUp from "./SignUp";
import Login from "./LogIn";

function GlobalNavigation() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard config={config} />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default GlobalNavigation;
