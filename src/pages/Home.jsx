import BlogData from "../data/BlogData";
import BlogCard from "../components/BlogCard";
import featuredImg from "../assets/blog1.png";
import Footer from "../components/Footer";
import point from "../assets/point.png";

export default function Home({ blogs }) {
  return (
    <div className="container mx-auto p-4 space-y-8">
      {/* Featured Blog Section */}
      <div className="relative w-full rounded-[24px] overflow-hidden shadow-lg h-60 sm:h-96 lg:h-[480px]">
        <img
          src={featuredImg}
          alt="Featured Blog"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center text-white px-6 py-8 space-y-3 rounded-[24px]">
          <h1 className="text-lg sm:text-xl md:text-2xl font-black">
            Featured
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-grover">
            Breaking into Product Design:
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-grover">
            Advice from Untitled Founder, Frankie
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-inter opacity-90 font-semibold">
            Let’s get one thing out of the way: you don’t need a fancy
            Bachelor’s Degree to get into Product Design. We sat down with
            Frankie Sallivan to talk about gatekeeping in product design and who
            anyone can get into this growing industry.
          </p>
        </div>
        <img
          src={point}
          alt="Decorative"
          className="absolute bottom-4 right-4 w-20 h-20 object-contain"
        />
      </div>

      {/* Recent Blog Posts Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold left-4 mb-4">Recent Blog Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {blogs.map((post) =>
            post ? <BlogCard key={post.id} post={post} /> : null
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

      {/* Footer only on Home Page */}
      <Footer />
    </div>
  );
}
