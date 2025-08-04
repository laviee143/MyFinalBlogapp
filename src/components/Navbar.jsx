import { Link } from "react-router-dom";
import { useState } from "react";
import PostBlogModal from "./PostBlogModal";

function Navbar({ addPost }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className="bg-white p-4 flex justify-between items-center">
      <div>
        <span className="text-black font-k2d text-lg font-family-sans">
          Blog
        </span>
      </div>
      <ul className="flex-1 flex justify-center space-x-6 text-black font-medium">
        <li>
          <Link
            to="/"
            className="bg-black text-white px-4 py-2 rounded hover:bg-pink"
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="/bookmarks" className="hover:text-pink-300 cursor-pointer">
            Bookmarks
          </Link>
        </li>
        <li>
          <Link to="/saved" className="hover:text-pink-300 cursor-pointer">
            Saved
          </Link>
        </li>
      </ul>
      <div>
        <button
          className="bg-black text-white px-4 py-2 rounded hover:bg-pink"
          onClick={() => setIsModalOpen(true)}
        >
          Post a Blog
        </button>
      </div>
      {isModalOpen && (
        <PostBlogModal
          onClose={() => setIsModalOpen(false)}
          addPost={(newPost) => {
            addPost(newPost);
            setIsModalOpen(false);
          }}
        />
      )}
    </nav>
  );
}

export default Navbar;
