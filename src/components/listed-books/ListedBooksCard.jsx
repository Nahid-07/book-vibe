import React from "react";

export const ListedBooksCard = ({ book }) => {
  const {
    bookName,
    author,
    tags,
    publisher,
    totalPages,
    yearOfPublishing,
    category,
    rating,
    image,
  } = book;
  return (
    <div className="flex flex-col md:flex-row gap-10 border-2 p-5 border-gray-400 rounded-lg">
      {/* Book Image */}
      <figure className="w-full md:w-[230px] h-[230px] overflow-hidden bg-gray-300 p-5 rounded-lg flex items-center justify-center">
        <img
          className="max-w-full max-h-full object-contain"
          src={image}
          alt={bookName}
        />
      </figure>

      {/* Book Details */}
      <div className="w-full flex flex-col justify-between">
        {/* Title & Author */}
        <div>
          <h4 className="text-2xl font-bold">{bookName}</h4>
          <p className="text-[16px] text-gray-400">By: {author}</p>
        </div>

        {/* Tags & Year */}
        <div className="flex flex-wrap items-center gap-3 mt-3">
          <span className="font-bold">Tag:</span>
          {tags.map((tag, index) => (
            <h6
              className="bg-gray-300 text-green-500 px-5 py-1 rounded-full font-semibold"
              key={index}
            >
              #{tag}
            </h6>
          ))}
          <p className="md:ml-auto text-lg font-semibold w-full md:w-auto">
            Year of publish: {yearOfPublishing}
          </p>
        </div>

        {/* Publisher & Pages */}
        <div className="flex flex-wrap gap-5 mt-3">
          <p className="text-[16px] text-gray-400">Publisher: {publisher}</p>
          <p>Page: {totalPages}</p>
        </div>

        <hr className="w-full my-3" />

        {/* Category, Rating & Button */}
        <div className="flex flex-wrap gap-5 items-center">
          <p>Category: {category}</p>
          <p>Rating: {rating}</p>
          <button className="ml-auto px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition w-full md:w-auto">
            View details
          </button>
        </div>
      </div>
    </div>
  );
};
