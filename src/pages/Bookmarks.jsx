// src/pages/Bookmarks.jsx

import { useAtom } from "jotai";
import { bookmarkedPostsAtom } from "../state/atoms";
import { BsBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Bookmarks() {
  const [bookmarkedPosts, setBookmarkedPosts] = useAtom(bookmarkedPostsAtom);

  const removeBookmark = (id) => {
    setBookmarkedPosts(bookmarkedPosts.filter((post) => post.id !== id));
  };

  if (!bookmarkedPosts.length) {
    return (
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold mb-2">Bookmarks</h1>
        <p className="text-gray-600">No bookmarks yet.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-8">Bookmarks</h1>

      <div className="space-y-10">
        {bookmarkedPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow rounded-lg p-6 space-y-4 relative"
          >
            {/* Top Row: Author + Bookmark */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={post.profileLink || "https://via.placeholder.com/40"}
                  alt={post.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">{post.author}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeBookmark(post.id)}
                title="Remove Bookmark"
              >
                <BsBookmarkFill className="text-xl text-black hover:text-red-500 transition" />
              </button>
            </div>

            {/* Entire Blog Content is Clickable */}
            <Link to={`/post/${post.id}`}>
              <h2 className="text-2xl font-semibold leading-tight">
                {post.title}
              </h2>

              <img
                src={post.image}
                alt={post.title}
                className="w-full h-60 object-cover rounded mt-2"
              />

              <p className="text-gray-700 leading-relaxed mt-2">
                {post.description?.slice(0, 180)}{" "}
                <span className="text-black underline">Read more</span>
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
