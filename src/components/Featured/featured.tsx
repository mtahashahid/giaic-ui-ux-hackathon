const posts = [
  {
    id: 1,
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
    image: "/home/muhammadt/Desktop/ecommerce-web/public/featured.jpg", // Add your own image paths
    tag: "NEW",
  },
  {
    id: 2,
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
    image: "/public/featured.jpg",
    tag: "NEW",
  },
  {
    id: 3,
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
    image: "/public/featured.jpg",
    tag: "NEW",
  },
];
import featuredImg from "../../../public/car.jpeg";
import Image from "next/image";
const FeaturedPosts = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[#23A6F0] font-semibold">Practice Advice</p>
          <h2 className="text-4xl font-bold text-black py-4">Featured Posts</h2>
          <p className="text-secondaryText mt-2">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow-lg overflow-hidden">
              <div className="relative">
                <Image
                  src={featuredImg}
                  alt={post.title}
                  className="w-full h-auto object-cover"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  {post.tag}
                </span>
              </div>
              <div className="p-4">
                <div className="text-sm mb-1 py-2">
                  <span className="text-blue-600">Google</span>
                  <span className="text-gray-500"> • Trending • New</span>
                </div>

                <h3 className="text-3xl text-gray-800">{post.title}</h3>
                <p className="text-gray-600 text-lg mt-2">{post.description}</p>
                <div className="flex items-center justify-between mt-4 text-gray-500 text-xs py-4">
                  <div className="flex items-center gap-1">
                    <span>📅</span> {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <span>💬</span> {post.comments} comments
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-secondaryText font-semibold hover:underline"
                  >
                    Learn More &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
