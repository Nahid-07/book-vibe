import React, { useEffect, useState } from 'react'
import { BookCard } from '../bookCard/BookCard';


export const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('./booksData.json')
        .then(res=> res.json())
        .then(data => setBooks(data))
    },[])
  return (
    <>
    <h2 className='text-center font-bold text-3xl my-20'>Books</h2>
    <div className='grid grid-cols-3 gap-5'>
        {
          books.map((book)=> <BookCard key={book.bookId} book={book}></BookCard>)
        }
    </div>
    </>
  )
}
