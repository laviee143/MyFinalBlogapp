import { Link } from "react-router-dom";

function BlogCard({ post }) {
  return (
    <Link to={`/blog/${post.id}`}>
      <div className="p-4 border rounded-lg shadow-lg hover:shadow-xl transition">
        <img
          src={post.image || "https://via.placeholder.com/300x200"}
          alt={post.title}
          className="w-full h-48 object-cover rounded-lg mb-2"
        />
        <h2 className="text-xl font-semibold">{post.title}</h2>
        <p className="text-sm text-gray-600">
          By {post.author} on {new Date(post.createdAt).toLocaleDateString()}
        </p>
        <p className="text-gray-700">{post.description}</p>
      </div>
    </Link>
  );
}

export default BlogCard;
