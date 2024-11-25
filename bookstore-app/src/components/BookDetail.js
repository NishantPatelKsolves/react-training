import {useState, useEffect, useCallback, useMemo} from 'react'
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  
  const getBook = useCallback(async function () {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
    const data = await res.json();
    console.log(res)
    console.log(data)
    setBook(data);
  },[id])

  useEffect(()=>{
    getBook();
  },[id, getBook])

  
  const bookDetails = useMemo(()=>{
    if(!book) return null;
    const {title, authors, description, price } = book.volumeInfo || {};
    return {title, authors, description, price };
  }, [book])
  
  // if(!book) return <h2>Loading...</h2>
  // return (
  //   <div>
  //     <h1>{book.volumeInfo.title}</h1>
  //     <h3>{book.volumeInfo.authors.join(", ")}</h3>
  //     <p>{book.volumeInfo.description}</p>
  //     <p>Price: {book.volumeInfo.price ? `$${book.volumeInfo.price}`: "N/A"}</p>
  //   </div>
  // )

  if(!bookDetails) return <p>Loading...</p>

  return(
    <div>
      <h1>{bookDetails.title}</h1>
      <h3>{bookDetails.authors.join(", ")}</h3>
      <p>{bookDetails.description}</p>
      <p>{bookDetails.price ? `$${bookDetails.price}` : "N/A"}</p>
      </div>
  )
}

export default BookDetail
