import { useParams, useNavigate } from "react-router-dom";
import { BsBookmark, BsBookmarkFill, BsTrash } from "react-icons/bs";
import { useAtom } from "jotai";
import { bookmarkedPostsAtom } from "../state/atoms";
import { useEffect, useState } from "react";
import EditPostModal from "../components/EditPostModal";

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookmarkedPosts, setBookmarkedPosts] = useAtom(bookmarkedPostsAtom);

  const [isEditing, setIsEditing] = useState(false);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const foundPost = storedBlogs.find((p) => p.id === parseInt(id));
    setPost(foundPost);
  }, [id]);

  const isBookmarked = bookmarkedPosts.some((p) => p.id === post?.id);

  const toggleBookmark = () => {
    if (!post) return;
    if (isBookmarked) {
      setBookmarkedPosts(bookmarkedPosts.filter((p) => p.id !== post.id));
    } else {
      setBookmarkedPosts([...bookmarkedPosts, post]);
    }
  };

  const handleSave = (updatedPost) => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const updatedBlogs = storedBlogs.map((b) =>
      b.id === updatedPost.id ? updatedPost : b
    );
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    setPost(updatedPost);
    setIsEditing(false);
  };

  const handleDelete = () => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const updatedBlogs = storedBlogs.filter((b) => b.id !== post.id);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    navigate("/");
  };

  if (!post) {
    return (
      <div className="text-center py-10 text-gray-500">Post not found.</div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      {/* Top Actions */}
      <div className="flex justify-between items-start mb-6">
        <button
          onClick={() => navigate(-1)}
          className="text-black hover:underline text-sm"
        >
          ← Back
        </button>
        <div className="flex gap-2 items-center">
          <button
            onClick={() => setIsEditing(true)}
            className="p-2 bg-gray-100 rounded hover:bg-blue-100"
            title="Edit"
          >
            ✏️
          </button>
          <button
            onClick={handleDelete}
            className="p-2 bg-gray-100 rounded hover:bg-red-100"
            title="Delete"
          >
            <BsTrash className="text-lg" />
          </button>
          <button
            onClick={toggleBookmark}
            className="p-2 bg-gray-100 rounded hover:bg-yellow-100"
            title="Bookmark"
          >
            {isBookmarked ? (
              <BsBookmarkFill className="text-xl text-yellow-600" />
            ) : (
              <BsBookmark className="text-xl text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>

      {/* Author Info */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={post.authorImage || "https://via.placeholder.com/40"}
          alt={post.author}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold">{post.author}</p>
          <p className="text-xs text-gray-500">
            {new Date(post.createdAt).toLocaleDateString()}
            {post.editedAt && (
              <span className="italic text-xs ml-2 text-gray-400">
                (Edited on {new Date(post.editedAt).toLocaleDateString()})
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Image */}
      <img
        src={post.image || "https://via.placeholder.com/800x300"}
        alt={post.title}
        className="w-full h-72 object-cover rounded-lg mb-6"
      />

      {/* Content */}
      <div className="prose prose-lg text-gray-700">
        {post.content || post.description || "No content available."}
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <EditPostModal
          post={post}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  );
}
