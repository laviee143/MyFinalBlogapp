import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import Bookmarks from "./pages/Bookmarks";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<BlogDetails />} />

        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </div>
  );
}
