import BlogData from "../data/BlogData";
import BlogCard from "../components/BlogCard";
import featuredImg from "../assets/blog1.png";

export default function Home() {
  return (
    <div className="container mx-auto p-4 space-y-8">
      {/* Featured Blog Section */}
      <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
        <img
          src={featuredImg}
          alt="Featured Blog"
          className="w-full h-auto object-cover md:h-96 sm:h-64"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/800x300";
          }}
        />
        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center text-white text-center p-4">
          <div className="w-full">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">
              Featured
            </h1>
            <h2
              className="text-4xl md:text-5xl font-normal leading-tight text-center"
              style={{ fontFamily: "'Irish Grover', cursive" }}
            >
              Breaking into Product Design:
            </h2>
            <p
              className="text-4xl md:text-5xl font-normal leading-tight text-center"
              style={{ fontFamily: "'Irish Grover', cursive" }}
            >
              Advice from Untitled Founder, Frankie
            </p>
            <p className="text-lg md:text-xl font-semibold mt-4 text-center max-w-2xl mx-auto">
              Let’s get one thing out of the way: you don’t need a fancy
              Bachelor’s Degree to get into Product Design. We sat down with
              Frankie Sallivan to talk about gatekeeping in product design and
              how anyone can get into this growing industry.
            </p>
          </div>
        </div>
      </div>

      {/* Recent Blog Posts Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-4">Recent Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BlogData.length ? (
            BlogData.map((p) => <BlogCard key={p.id} post={p} />)
          ) : (
            <p>No posts yet.</p>
          )}
        </div>
        <div className="text-center mt-4">
          <button
            className="bg-black text-white px-4 py-2 rounded hover:bg-pink"
            onClick={() => console.log("no more posts available")}
          >
            Show more
          </button>
        </div>
      </div>
    </div>
  );
}
