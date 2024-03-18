import { Route, Routes } from "react-router-dom";

import Navigation from "./Navigation";
import DefaultLayout from "../layouts/DefaultLayout";
import ProtectedLayout from "../layouts/ProtectedLayout";
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

function GlobalNavigation() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/buy" element={<ProductPage />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
        <Route element={<ProtectedLayout />}>
          <Route path="/admin-view" element={<AdminView />} />
          <Route path="/dashboard" element={<Dashboard config={config} />} />
          <Route path="/news" element={<News />} />
          <Route path="/register-fob" element={<RegisterFob />} />
        </Route>
      </Routes>
    </div>
  );
}

export default GlobalNavigation;
