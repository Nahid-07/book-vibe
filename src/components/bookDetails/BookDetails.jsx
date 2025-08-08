import { useLoaderData, useParams } from "react-router";
import { addToStoredReadList } from "../../utility/addToDB";
import { addWishListToLS } from "../../utility/addWishList";

export const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);
  const handleLocalStorageSetId = (bookId)=>{
    addToStoredReadList(bookId)
  }
  const handleWishListSetToLS = (id)=>{
    addWishListToLS(id)
  }
  return (
    <section className="flex justify-between gap-10 my-10">
      <div className="w-1/2 bg-gray-300 flex justify-center items-center p-10">
        <img src={book.image} alt="" className="h-[500px]" />
      </div>
      <div className="w-1/2">
        <h1 className="text-5xl font-bold">{book.bookName}</h1>
        <h6 className="text-xl text-[#131313] my-3">by: {book.author}</h6>
        <hr />
        <p className="text-[20px] py-3">{book.category}</p>
        <hr />
        <p className="text-[20px] text-[#131313] mt-2">
          <span className="font-bold">Review:</span> {book.review}
        </p>
        <div className="my-2">
          {book.tags.map((tag, index) => (
            <button
              className="bg-gray-300 text-green-500 mr-5 px-4 p-2 rounded-md"
              key={index}
            >
              #{tag}
            </button>
          ))}
        </div>
        <ul>
          <li>
            Number of pages: <span>{book.totalPages}</span>
          </li>
          <li>
            Publisher: <span>{book.publisher}</span>
          </li>
          <li>
            Year of publishing: <span>{book.yearOfPublishing}</span>
          </li>
          <li>
            Rating: <span>{book.rating}</span>
          </li>
        </ul>
        <div>
          <button onClick={()=>handleLocalStorageSetId(book.bookId)} className="outline outline-green-500 px-5 py-2 mr-5 rounded-md font-medium">
            Read
          </button>
          <button onClick={()=>handleWishListSetToLS(book.bookId)} className="bg-blue-400 text-white px-5 py-2 font-medium rounded-md">
            Wishlist
          </button>
        </div>
      </div>
    </section>
  );
};
