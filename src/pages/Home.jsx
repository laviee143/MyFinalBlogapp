import BlogData from "../data/BlogData";
import BlogCard from "../components/BlogCard";
import featuredImg from "../assets/blog1.png";

export default function Home() {
  return (
    <div className="container mx-auto p-4 space-y-8">
      {/* Featured Blog Section */}
      <div className="relative w-full h-150 rounded-lg overflow-hidden shadow-lg">
        <img
          src={featuredImg}
          alt="Featured Blog"
          className="w-full h-150 object-cover"
          // if image is not viewd
          // onError={(e) => {
          //   e.target.src = "https://via.placeholder.com/800x300";
          // }}
        />
        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center text-white text-center p-4">
          <div>
            <h1 className="w-[171px] h-[33px] absolute top-[180px] left-[50px] opacity-100 font-black text-[25px] leading-[100%] tracking-normal font-sans">
              Featured
            </h1>

            <h2
              className="absolute w-[1100px] h-[85px] top-[250px] left-0 opacity-100  text-[50px] font-normal leading-[100%] tracking-normal"
              style={{ fontFamily: "'Irish Grover', cursive" }}
            >
              Breaking into Product Design:
            </h2>
            <p
              className="absolute w-[1100px] h-[85px] top-[300px] left-10 opacity-100  text-[50px] font-normal leading-[100%] tracking-normal"
              style={{ fontFamily: "'Irish Grover', cursive" }}
            >
              Advice from Untitled Founder, Frankie
            </p>

            <p
              className="absolute w-[1000px] h-[174px] top-[370px] left-[50px] opacity-100 text-[20px] font-black leading-[100%] tracking-normal"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
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
        <h1 className="text-3xl font-bold left-4 mb-4">Recent Blog Posts</h1>{" "}
        {/* Added heading */}
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
