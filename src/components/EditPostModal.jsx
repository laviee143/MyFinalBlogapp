import { useState } from "react";

export default function EditPostModal({ post, onSave, onCancel }) {
  const [author, setAuthor] = useState(post.author || "");
  const [title, setTitle] = useState(post.title || "");
  const [image, setImage] = useState(post.image || "");
  const [description, setDescription] = useState(post.description || "");
  const [content, setContent] = useState(post.content || "");
  const [error, setError] = useState("");

  const handleSave = (e) => {
    e.preventDefault();

    // ✅ Validation
    if (!title.trim() || !content.trim()) {
      setError("Title and content are required.");
      return;
    }

    // Save post
    const updatedPost = {
      ...post,
      author,
      title,
      image,
      description,
      content,
      editedAt: new Date().toISOString(),
    };

    onSave(updatedPost);
  };

  return (
    <div className="fixed inset-0  z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg relative">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Edit your Post
        </h2>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <form onSubmit={handleSave} className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Author"
              className="w-1/2 p-2 border rounded"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <input
              type="text"
              placeholder="Date"
              className="w-1/2 p-2 border rounded"
              value={new Date().toLocaleDateString()}
              disabled
            />
          </div>

          <input
            type="text"
            placeholder="Title"
            className="w-full p-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Image URL"
            className="w-full p-2 border rounded"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <textarea
            placeholder="Description"
            className="w-full p-2 border rounded"
            rows="2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <textarea
            placeholder="Content"
            className="w-full p-2 border rounded"
            rows="6"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-black rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
