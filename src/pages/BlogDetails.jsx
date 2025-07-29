import { useParams } from "react-router-dom";
import BlogData from "../data/BlogData";

export default function BlogDetails() {
  const { id } = useParams();
  const post = BlogData.find((p) => p.id === parseInt(id));

  if (!post)
    return <p className="text-center py-10 text-gray-500">Post not found.</p>;

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
          <p className="text-sm text-gray-600 mb-4">
            By {post.author} on {new Date(post.createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className="space-x-2">
          <button className="px-3 py-1 bg-black text-white rounded hover:bg-blue-600">
            Edit
          </button>
          <button className="px-3 py-1 bg-black text-white rounded hover:bg-green-600">
            Save
          </button>
          <button className="px-3 py-1 bg-black text-white rounded hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>
      <img
        src={post.image || "https://via.placeholder.com/800x300"}
        alt={post.title}
        className="w-full h-72 object-cover rounded-lg mb-6"
      />
      <div className="prose prose-lg text-gray-700">
        {post.content || post.description || "No content available."}
      </div>
    </div>
  );
}
// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import BlogData from "../data/BlogData";

// export default function BlogDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const postIndex = BlogData.findIndex((p) => p.id === parseInt(id));
//   const post = BlogData[postIndex];
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedContent, setEditedContent] = useState(
//     post?.content || post?.description
//   );

//   if (!post)
//     return <p className="text-center py-10 text-gray-500">Post not found.</p>;

//   const handleSave = () => {
//     BlogData[postIndex] = { ...post, content: editedContent };
//     setIsEditing(false);
//   };

//   const handleDelete = () => {
//     if (window.confirm("Are you sure you want to delete this post?")) {
//       BlogData.splice(postIndex, 1);
//       navigate("/");
//     }
//   };

//   const handleSaveToProfile = () => {
//     alert("Saved to your reading list!");
//   };

//   return (
//     <div className="container mx-auto max-w-3xl p-6">
//       <div className="flex justify-between mb-6">
//         <div>
//           <h1 className="text-4xl font-bold">{post.title}</h1>
//           <p className="text-sm text-gray-600">
//             By {post.author} on {new Date(post.createdAt).toLocaleDateString()}
//           </p>
//         </div>
//         <div className="space-x-2">
//           <button
//             className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
//             onClick={() => setIsEditing(true)}
//           >
//             Edit
//           </button>
//           <button
//             className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
//             onClick={handleSaveToProfile}
//           >
//             Save
//           </button>
//           <button
//             className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//             onClick={handleDelete}
//           >
//             Delete
//           </button>
//         </div>
//       </div>

//       <img
//         src={post.image || "https://via.placeholder.com/800x300"}
//         alt={post.title}
//         className="w-full h-72 object-cover rounded-lg mb-8"
//       />

//       <div className="prose prose-lg text-gray-800">
//         {isEditing ? (
//           <>
//             <textarea
//               className="w-full border rounded p-2 mb-4"
//               rows={12}
//               value={editedContent}
//               onChange={(e) => setEditedContent(e.target.value)}
//             />
//             <div className="flex space-x-3">
//               <button
//                 className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                 onClick={handleSave}
//               >
//                 Save Changes
//               </button>
//               <button
//                 className="px-4 py-2 border rounded hover:bg-gray-100"
//                 onClick={() => setIsEditing(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </>
//         ) : post.content ? (
//           <div dangerouslySetInnerHTML={{ __html: post.content }} />
//         ) : (
//           <p>{post.description}</p>
//         )}
//       </div>
//     </div>
//   );
// }
