const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex justify-between items-center border-b pb-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Bandage</h2>
          <div className="flex gap-4 text-gray-600">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f text-blue-600 text-lg"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram text-pink-500 text-lg"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter text-blue-400 text-lg"></i>
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 py-8">
          <div>
            <h4 className="font-bold text-gray-800 mb-3">Company Info</h4>
            <ul className="text-secondaryText text-sm font-semibold space-y-2">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Carrier</a>
              </li>
              <li>
                <a href="#">We are hiring</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-3">Legal</h4>
            <ul className="text-secondaryText text-sm font-semibold space-y-2">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Carrier</a>
              </li>
              <li>
                <a href="#">We are hiring</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-3">Features</h4>
            <ul className="text-secondaryText text-sm font-semibold space-y-2">
              <li>
                <a href="#">Business Marketing</a>
              </li>
              <li>
                <a href="#">User Analytic</a>
              </li>
              <li>
                <a href="#">Live Chat</a>
              </li>
              <li>
                <a href="#">Unlimited Support</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-3">Resources</h4>
            <ul className="text-secondaryText text-sm font-semibold space-y-2">
              <li>
                <a href="#">iOS & Android</a>
              </li>
              <li>
                <a href="#">Watch a Demo</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-3">Get In Touch</h4>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-l border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 text-xs mt-2">
              Lorem imp sum dolor Amit
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 font-semibold text-secondaryText text-sm">
          <p>Made With Love By Muhammad Taha All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
