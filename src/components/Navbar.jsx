const Navbar = ({ category, setCategory }) => {
  const categories = [
    { label: "All Books", value: "all" },
    { label: "Fiction", value: "fiction" },
    { label: "Drama", value: "drama" },
    { label: "Pets", value: "pets" },
    { label: "Psychology", value: "psychology" },
    { label: "Humor", value: "humor" },
  ];

  return (

<>
<div className="shadow-lg flex justify-between items-center p-4 mb-6">

  <h1 className="text-3xl font-bold text-black">BookHaven</h1>

  <p className="text-gray-600 opacity-70">
    Discover your next favorite story from our curated collection
  </p>

 
  <h1
      onClick={() => navigate("/cart")}
      className="text-2xl cursor-pointer hover:text-blue-600"
  >
      🛒 Cart
  </h1>
</div>
    
    <nav className="bg-gradient-to-r from-gray-300 via-white to-gray-300 p-4">

  <div className="mb-3 relative">
                    <input 
                        type="text"
                        placeholder="Search titles, authors, genres..."
                        className="w-full p-2 pl-10 rounded text-black bg-gray-100"
                    />
                  
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                        />
                    </svg>
                </div>

      <div className="flex flex-wrap gap-4">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setCategory(cat.value)}
            className={`px-3 py-1 rounded-full transition-colors ${
              category === cat.value
                ? "bg-blue-500 text-white" 
                : "bg-white text-black  hover:bg-black hover:text-white transition-colors duration-300"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </nav>
    </>
  );
};

export default Navbar; // make sure to export default
