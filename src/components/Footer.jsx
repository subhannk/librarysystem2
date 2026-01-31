const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        
        <div>
          <h2 className="text-2xl font-bold text-white">BookHaven</h2>
          <p className="mt-3 text-sm">
            Discover, explore, and read your favorite books anytime, anywhere.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Categories</li>
            <li className="hover:text-white cursor-pointer">Best Sellers</li>
            <li className="hover:text-white cursor-pointer">My Library</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>Fiction</li>
            <li>Drama</li>
            <li>Psychology</li>
            <li>Humor</li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm">📧 support@bookhaven.com</p>
          <p className="text-sm mt-1">📍 India</p>
        </div>
      </div>

      
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} BookHaven. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
