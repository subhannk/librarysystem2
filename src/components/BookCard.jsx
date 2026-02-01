import React from "react";

const CATEGORY_IMAGES = {
  fiction: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=80",
  drama: "https://images.unsplash.com/photo-1601582580543-d5423e4b9463?auto=format&fit=crop&w=800&q=80",
  pets: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80",
  psychology: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
  humor: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80",
  all: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
};

const BookCard = ({ title, author, price, categories, rating, image, description }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center w-full">
    <div className="flex justify-between items-center w-full mb-2">
      <button className="px-2 py-0 bg-white border border-gray-400 rounded-md">
        {categories || "Fiction"}
      </button>

      <div className="flex items-center">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className="text-yellow-400">
            {i < Math.round(rating || 0) ? "★" : "☆"}
          </span>
        ))}
        <span className="text-gray-600 text-sm ml-2">
          {rating ? `(${rating.toFixed(1)})` : "(No rating)"}
        </span>
      </div>
    </div>

    <div className="w-full h-80 rounded mb-4 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>

    <h2 className="font-bold text-lg mb-2 text-center">{title}</h2>
    <p className="text-gray-600 text-sm mb-2 text-center">{author}</p>
    <p className="text-sm text-gray-600 line-clamp-3 mb-4">{description || "No description available."}</p>

    <div className="w-full flex justify-between items-center mt-auto">
      <h2 className="font-bold text-lg">{price}</h2>
      <button className="bg-black text-white px-4 py-1 rounded hover:bg-orange-500 transition-colors">
        🛒 Add
      </button>
    </div>
  </div>
);

const CardGrid = ({ books }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {books.map((book, index) => (
        <div
          key={index}
          className="w-1/3 sm:w-1/2 lg:w-1/4"
        >
          <BookCard
            title={book.volumeInfo?.title}
            author={book.volumeInfo?.authors?.[0] || "Unknown"}
            categories={book.volumeInfo?.categories?.[0] || "Fiction"}
            rating={book.volumeInfo?.averageRating}
            description={book.volumeInfo?.description}
            price={
              book.saleInfo?.listPrice
                ? `$${book.saleInfo.listPrice.amount}`
                : "$14.99"
            }
            image={
              book.volumeInfo?.imageLinks?.thumbnail
                ? book.volumeInfo.imageLinks.thumbnail.replace("http:", "https:")
                : CATEGORY_IMAGES["all"]
            }
          />
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
