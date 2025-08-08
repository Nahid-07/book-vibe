import { Link } from "react-router";

export const BookCard = ({ book }) => {
  const { bookId, image, bookName, author, category, rating } = book;
  return (
    <Link to={`/bookdetails/${bookId}`}>
      <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden p-4">
        {/* Book Image */}
        <figure>
          <img
            src={image}
            alt="Book Cover"
            className="w-full h-48 rounded-md"
          />
        </figure>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button className="text-green-400 font-semibold hover:underline">
            Buy Now
          </button>
          <button className="text-green-400 font-semibold hover:underline">
            Read Sample
          </button>
        </div>

        {/* Book Info */}
        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-800">{bookName}</h2>
          <p className="text-sm text-gray-600 mt-1">{author}</p>
        </div>

        {/* Category and Rating */}
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm bg-gray-100 px-2 py-1 rounded-full text-gray-700">
            {category}
          </span>
          <span className="text-yellow-500 text-sm font-medium">{rating}</span>
        </div>
      </div>
    </Link>
  );
};
