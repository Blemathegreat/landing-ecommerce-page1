import Image from "next/image";
const blogPosts = [
  {
    image: "/IMG.png",
    title: "Wellness Tips",
    date: "June 2025",
    desc: "Discover daily wellness routines for a healthier life.",
  },
  {
    image: "/IMG.png",
    title: "Aroma Guide",
    date: "June 2025",
    desc: "Learn how to use essential oils for relaxation.",
  },
  {
    image: "/IMG.png",
    title: "Natural Living",
    date: "June 2025",
    desc: "Embrace a natural lifestyle with our top tips.",
  },
];

export default function Home() {
  return (
    <main className="font-sans bg-white text-gray-800">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="font-bold text-green-500 text-xl">Aroma</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-green-500">Home</a>
          <a href="#" className="hover:text-green-500">Shop</a>
          <a href="#" className="hover:text-green-500">Blog</a>
          <a href="#" className="hover:text-green-500">Contact</a>
        </nav>
        <div>
          <svg width="24" height="24" fill="none" stroke="currentColor" className="text-green-500"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        </div>
      </header>

     
      {/* Hero Section */}
      <section className="relative flex flex-row items-center px-6 pt-12 pb-8 bg-white overflow-hidden">
        <div className="flex-1 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
            Pear kiwi & Mint
          </h1>
          <p className="text-base text-gray-600 mb-4 max-w-md">
            Experience the refreshing blend of pear, kiwi, and mint in our new fragrance collection.
          </p>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition">
            Shop Now
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center z-10">
          <Image
            src="/Photoo.png"
            alt="Product"
            width={320}
            height={320}
            className="rounded-xl shadow-lg m-0 p-0 h-80 w-auto"
          />
        </div>
      </section>

      {/* Aromatherapy Well-being Section */}
      <section className="flex flex-row items-center px-6 py-12 gap-8 bg-white">
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/Photo.png"
            alt="Diffuser"
            width={260}
            height={260}
            className="rounded-xl m-0 p-0 h-64 w-auto"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Improve your well-being with Aromatherapy
          </h2>
          <p className="text-base text-gray-600 mb-6">
            Our products are designed to help you relax and feel your best. Discover the power of natural scents.
          </p>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="px-6 py-12">
  <div className="flex flex-row items-center gap-6">
    <h3 className="text-xl font-bold text-green-600 whitespace-nowrap">Bestsellers</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-1">
      {/* Product Card 1 */}
      <div className="bg-white rounded-xl shadow p-3 flex flex-col items-center gap-2 max-w-xs w-44">
        <div className="w-20 h-20 flex items-center justify-center">
          <Image
            src="/Aroma Diffuser.png"
            alt="Aroma Diffuser"
            width={80}
            height={80}
            className="w-auto h-full"
          />
        </div>
        <div className="font-semibold text-sm">Aroma Diffuser</div>
        <div className="flex items-center text-yellow-400 text-xs">★★★★☆</div>
        <div className="text-green-600 font-bold text-sm">$29.99</div>
      </div>
      {/* Product Card 2 */}
      <div className="bg-white rounded-xl shadow p-3 flex flex-col items-center gap-2 max-w-xs w-44">
        <div className="w-20 h-20 flex items-center justify-center">
          <Image
            src="/Lux Aroma Diffuser.png"
            alt="Lux Aroma Diffuser"
            width={80}
            height={80}
            className="w-auto h-full"
          />
        </div>
        <div className="font-semibold text-sm">Lux Aroma Diffuser</div>
        <div className="flex items-center text-yellow-400 text-xs">★★★★★</div>
        <div className="text-green-600 font-bold text-sm">$39.99</div>
      </div>
      {/* Add more product cards as needed */}
    </div>
  </div>
</section>

      {/* Natural Benefits Banner */}
      <section className="flex flex-row items-center bg-green-100 rounded-xl p-6 h-64">
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-green-700 mb-4 leading-snug">
            Our luxury soaps are 100% natural<br />
            providing nourishing benefits for your skin.
          </h3>
          <button className="bg-green-500 text-white px-4 py-1 rounded font-semibold text-sm hover:bg-green-600 transition w-fit">
            See more
          </button>
        </div>
        <div className="flex-1 h-full flex items-center p-0 m-0">
          <Image
            src="/Image.png"
            alt="Soap"
            width={300}
            height={500}
            className="h-full w-auto object-cover rounded-xl p-0 m-0"
            style={{ maxHeight: "100%" }}
          />
        </div>
      </section>

      {/* Trends Section */}
      <section className="flex flex-row items-start px-6 py-8 w-full overflow-x-auto bg-white rounded-xl h-64">
        <h3 className="text-xl font-bold text-green-600 whitespace-nowrap mr-6 flex items-center h-full">
          Trends
        </h3>
        <div className="flex flex-row gap-8 h-full items-center">
          {/* Product Card 1 */}
          <div className="bg-white rounded-xl shadow flex flex-col items-center justify-center h-full min-w-[144px] w-36 p-0 m-2 flex-shrink-0">
            <Image
              src="/Background.png"
              alt="Pocket Power Gift Set"
              width={72}
              height={72}
              className="h-16 w-auto object-cover rounded-xl m-0 p-0"
            />
            <div className="mt-2 font-semibold text-center text-sm">Pocket Power Gift Set</div>
            <div className="text-green-600 font-bold mt-1 text-sm">$19.99</div>
          </div>
          {/* Product Card 2 */}
          <div className="bg-white rounded-xl shadow flex flex-col items-center justify-center h-full min-w-[144px] w-36 p-0 m-2 flex-shrink-0">
            <Image
              src="/Rectangle 57.png"
              alt="Mint Handcrafted Soap Bar"
              width={72}
              height={72}
              className="h-16 w-auto object-cover rounded-xl m-0 p-0"
            />
            <div className="mt-2 font-semibold text-center text-sm">Mint Handcrafted Soap Bar</div>
            <div className="text-green-600 font-bold mt-1 text-sm">$9.99</div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="px-4 md:px-6 py-12 w-full">
  <h3 className="text-xl font-bold text-green-600 mb-8 text-center">BLOG</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
    {blogPosts.map((post, i) => (
      <div
        key={i}
        className="bg-white rounded-xl shadow p-4 w-full max-w-xs"
      >
        <div className="w-30 h-20 flex items-center justify-center mx-auto">
          <Image
            src={post.image}
            alt={post.title}
            width={120}
            height={80}
            className="w-auto h-full rounded"
          />
        </div>
        <div className="mt-4 font-semibold text-center">{post.title}</div>
        <div className="text-gray-500 text-sm mt-2 text-center">{post.date}</div>
        <p className="text-gray-600 mt-2 text-center">{post.desc}</p>
      </div>
    ))}
  </div>
</section>


      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-8 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-row w-full gap-6 flex-wrap">
          {/* Logo and description */}
          <div className="flex flex-col flex-1 min-w-[180px]">
            <div className="font-bold text-green-600 mb-2">Aroma</div>
            <p className="text-sm text-gray-500"></p>
          </div>
          {/* Company links */}
          <div className="flex flex-col flex-1 min-w-[140px]">
            <div className="font-semibold mb-2">Company</div>
            <ul className="text-sm text-gray-600 space-y-1">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          {/* Support links */}
          <div className="flex flex-col flex-1 min-w-[140px]">
            <div className="font-semibold mb-2">Support</div>
            <ul className="text-sm text-gray-600 space-y-1">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>
          {/* Newsletter */}
          <div className="flex flex-col flex-1 min-w-[200px]">
            <div className="font-semibold mb-2">Newsletter</div>
            <form className="flex flex-col gap-2">
              <input type="email" placeholder="Your email" className="px-2 py-1 rounded border border-gray-300" />
              <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-8">&copy; 2025 Aroma. All rights reserved.</div>
      </footer>
    </main>
  );
}