import { useState } from "react";

function PostBlogModal({ onClose }) {
  const [formData, setFormData] = useState({
    author: "",
    date: "",
    profileLink: "",
    title: "",
    description: "",
    content: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Blog posted:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0  flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Post a Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium">Author</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="w-full border rounded p-2"
                placeholder="Full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Profile Link</label>
            <input
              type="url"
              name="profileLink"
              value={formData.profileLink}
              onChange={handleChange}
              className="w-full border rounded p-2"
              placeholder="https://www.example.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="w-full border rounded p-2 h-24"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded"
            >
              Post
            </button>
          </div>
        </form>
        <div className="text-center mt-2 text-gray-500"></div>
      </div>
    </div>
  );
}

export default PostBlogModal;
