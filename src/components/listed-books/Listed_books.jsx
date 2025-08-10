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
  const [wishlists, setWishList] = useState([])
  const allBooks = useLoaderData();
  useEffect(() => {
    const readBooksList = getStoredReadList();
    const readBooks = readBooksList.map((id) => parseInt(id));
    const booksWhichRead = allBooks.filter((book) =>
      readBooks.includes(book.bookId)
    );
    setReadBooks(booksWhichRead);
  }, [allBooks]);

  useEffect(()=>{
    const wishListBook = getWishListFrmLS();
    const wishlist = wishListBook.map(id => parseInt(id));
    const bookWhichWishlisted = allBooks.filter(book => wishlist.includes(book.bookId))
    setWishList(bookWhichWishlisted)
  },[allBooks])
  
  return (
    <div>
      <div className="bg-gray-300 text-center font-bold text-xl p-4 rounded-md my-5">
        Books
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
