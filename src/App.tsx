import { Route, Routes } from "react-router-dom";
import "./style.css";
import Navigation from "./Navigation";
import About from "./About";
import Dashboard from "./Dashboard";
import News from "./News";
import { config } from "./GraphConfig";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard config={config} />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
