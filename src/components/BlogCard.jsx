// src/components/BlogCard.jsx
import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <div className="relative bg-white shadow rounded-lg p-4">
      <Link to={`/post/${post.id}`}>
        <div className="space-y-2">
          {/* Author and date */}
          <div>
            <p className="text-sm font-medium">{post.author}</p>
            <p className="text-xs text-gray-500">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>

          {/* Title */}
          <h2 className="text-lg font-semibold">{post.title}</h2>

          {/* Image */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-40 object-cover rounded"
          />

          {/* Short description */}
          <p className="text-gray-700">{post.description.slice(0, 100)}...</p>
        </div>
      </Link>
    </div>
  );
}
