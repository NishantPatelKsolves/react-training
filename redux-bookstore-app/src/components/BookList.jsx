import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { fetchBooks } from '../features/books/booksSlice';
import { addBook } from '../features/readingList/readingListSlice';

const BookList = () => {
    const {books, status, error, filters} = useSelector((state)=>state.books) 
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchBooks('all'));
    },[dispatch]);

    const filteredBooks = books.filter(
      (book) =>
        (!filters.category || book.category === filters.category) &&
        (!filters.author || book.author === filters.author)
    );

    if(status === 'loading') return <p>Loading...</p>
    if(status === 'failed') return <p>Error: {error}</p>
    
  return (
    <div>
      <h3>Book List</h3>
      {
        filteredBooks.map((b,i)=>
          <div key={i} style={{backgroundColor:"teal"}}>
            <p>Title: {b.volumeInfo.title}</p>
            <p>Authors: {b.volumeInfo.authors?.map((a,i)=><span key={i}>{a}</span>)}</p>
            <button onClick={()=>{dispatch(addBook(b))}}>Add to reading List</button>
          </div>
        )
      }
    </div>
  )
}

export default BookList
