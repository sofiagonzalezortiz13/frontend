import { Routes, Route } from "react-router-dom";
import { Header } from "./features/layout/Header";
import { Content } from "./features/layout/Content";
import Portal from "./features/auth/components/portal";
import ApiRyC from "./features/layout/ApiRyC";

export default function AppRoutes() {
  return (
    <div className="landing">
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/publicaciones" element={<ApiRyC />} />
      </Routes>
    </div>
  );
}