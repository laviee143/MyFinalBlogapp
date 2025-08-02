import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import Bookmarks from "./pages/Bookmarks";
import BlogData from "./data/BlogData"; // ✅ your original posts

export default function App() {
  const [blogs, setBlogs] = useState(() => {
    const stored = localStorage.getItem("blogs");
    return stored ? JSON.parse(stored) : BlogData;
  });

  useEffect(() => {
    if (!localStorage.getItem("blogs")) {
      localStorage.setItem("blogs", JSON.stringify(BlogData));
    }
  }, []);

  const addPost = (newBlog) => {
    try {
      const updatedBlogs = [...blogs, newBlog];
      setBlogs(updatedBlogs);
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    } catch (error) {
      console.error("Failed to add post:", error);
    }
  };

  return (
    <div>
      <Navbar addPost={addPost} />
      <Routes>
        <Route path="/" element={<Home blogs={blogs} />} />
        <Route path="/post/:id" element={<BlogDetails blogs={blogs} />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </div>
  );
}
