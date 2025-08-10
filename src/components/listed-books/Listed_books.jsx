import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utility/addToDB";
import { useLoaderData } from "react-router";
import { ListedBooksCard } from "./ListedBooksCard";

export const Listed_books = () => {
  const [readBooks, setReadBooks] = useState([]);
  const allBooks = useLoaderData();
  useEffect(() => {
    const readBooksList = getStoredReadList();
    const readBooks = readBooksList.map((id) => parseInt(id));
    const booksWhichRead = allBooks.filter((book) =>
      readBooks.includes(book.bookId)
    );
    setReadBooks(booksWhichRead);
  }, [allBooks]);
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
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};
