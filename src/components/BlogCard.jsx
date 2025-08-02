import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  const displayDate = post.date
    ? post.date
    : post.createdAt
    ? new Date(post.createdAt).toLocaleDateString()
    : "Unknown date";

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 p-4">
      <Link to={`/post/${post.id}`}>
        {/* Blog Image */}
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-40 object-cover rounded mb-3"
        />

        {/* Blog Title */}
        <h2 className="text-lg font-semibold text-gray-800 mb-1">
          {post.title}
        </h2>

        {/* Blog Description */}
        <p className="text-sm text-gray-600 mb-2">
          {post.description?.slice(0, 100)}...
        </p>

        {/* Author Info with Image and Date */}
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <img
            src={post.authorImage || "https://i.pravatar.cc/100"}
            alt={post.author}
            className="w-6 h-6 rounded-full object-cover"
          />
          <span>{post.author}</span>
          <span className="text-gray-400">•</span>
          <span>{displayDate}</span>
        </div>
      </Link>
    </div>
  );
}
