import { useParams, useNavigate } from "react-router-dom";
import BlogData from "../data/BlogData";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { useAtom } from "jotai";
import { bookmarkedPostsAtom } from "../state/atoms";

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = BlogData.find((p) => p.id === parseInt(id));

  const [bookmarkedPosts, setBookmarkedPosts] = useAtom(bookmarkedPostsAtom);
  const isBookmarked = bookmarkedPosts.some((p) => p.id === post.id);

  const toggleBookmark = () => {
    if (isBookmarked) {
      setBookmarkedPosts(bookmarkedPosts.filter((p) => p.id !== post.id));
    } else {
      setBookmarkedPosts([...bookmarkedPosts, post]);
    }
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
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="text-black hover:underline text-sm"
        >
          ← Back
        </button>

        {/* Action buttons */}
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-black text-white rounded hover:bg-blue-600 text-sm">
            Edit
          </button>
          <button className="px-3 py-1 bg-black text-white rounded hover:bg-red-600 text-sm">
            Delete
          </button>

          {/* Bookmark / Save */}
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

      {/* Blog Title & Meta */}
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-4">
        By {post.author} on {new Date(post.createdAt).toLocaleDateString()}
      </p>

      {/* Image */}
      <img
        src={post.image || "https://via.placeholder.com/800x300"}
        alt={post.title}
        className="w-full h-72 object-cover rounded-lg mb-6"
      />

      {/* Blog Content */}
      <div className="prose prose-lg text-gray-700">
        {post.content || post.description || "No content available."}
      </div>
    </div>
  );
}
