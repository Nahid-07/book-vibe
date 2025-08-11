import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utility/addToDB";
import { useLoaderData } from "react-router";
import { ListedBooksCard } from "./ListedBooksCard";
import { getWishListFrmLS } from "../../utility/addWishList";
import { WishListedBooks } from "./WishListedBooks";

export const Listed_books = () => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishlists, setWishList] = useState([]);
  const allBooks = useLoaderData();
  useEffect(() => {
    const readBooksList = getStoredReadList();
    const readBooks = readBooksList.map((id) => parseInt(id));
    const booksWhichRead = allBooks.filter((book) =>
      readBooks.includes(book.bookId)
    );
    setReadBooks(booksWhichRead);
  }, [allBooks]);

  useEffect(() => {
    const wishListBook = getWishListFrmLS();
    const wishlist = wishListBook.map((id) => parseInt(id));
    const bookWhichWishlisted = allBooks.filter((book) =>
      wishlist.includes(book.bookId)
    );
    setWishList(bookWhichWishlisted);
  }, [allBooks]);

  const handleSort = (e) => {
  const value = e.target.value;

  if (value === "rating") {
    const sorted = [...readBooks].sort((a, b) => b.rating - a.rating);
    setReadBooks(sorted);
  } 
  else if (value === "pages") {
    const sorted = [...readBooks].sort((a, b) => b.totalPages - a.totalPages);
    setReadBooks(sorted);
  }
};


  return (
    <div>
      <div className="bg-gray-300 text-center font-bold text-xl p-4 rounded-md my-5">
        Books
      </div>
      <div className="flex justify-center my-5">
        <select onChange={handleSort} className="text-center appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 cursor-pointer">
          <option value="">Sort By</option>
          <option value="rating">Rating</option>
          <option value="pages">Number of Pages</option>
        </select>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div className="flex flex-col gap-5 my-5">
            {readBooks.map((book) => (
              <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col gap-5 my-5">
            {wishlists.map((book) => (
              <WishListedBooks key={book.bookId} book={book}></WishListedBooks>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};
