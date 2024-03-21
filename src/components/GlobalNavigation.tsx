import { Route, Routes } from "react-router-dom";

import Navigation from "./Navigation";
import About from "./About";
import Dashboard from "./Dashboard";
import { config } from "./GraphConfig";
import News from "./News";
import SignUp from "./SignUp";
import Login from "./LogIn";
import RegisterFob from "./RegisterFob";
import LandingPage from "./LandingPage";
import ProductPage from "./ProductPage";
import Chat from "./Chat";
import AdminView from "./AdminView";

import { useUser } from "../features/auth/UserContext";

function GlobalNavigation() {
  const { user } = useUser();

  return (
    <div>
      <Navigation />
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          {!user && <Route path="/login" element={<Login />} />}
          {!user && <Route path="/signup" element={<SignUp />} />}
          <Route path="/buy" element={<ProductPage />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          {user && user.userRole == "admin" && <Route path="/admin-view" element={<AdminView />} />}
          {user && user.userRole === "regular user" && <Route path="/dashboard" element={<Dashboard config={config} />} />}
          {user && <Route path="/news" element={<News />} />}
          {user && user.userRole === "regular user" && <Route path="/register-fob" element={<RegisterFob />} />}
      </Routes>
    </div>
  );
}

export default GlobalNavigation;
