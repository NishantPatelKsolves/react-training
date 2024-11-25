import {useState, useEffect, useCallback} from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
    const [books, setBooks] = useState([]);

    const getBooks = useCallback(async function () {
        const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=%22coding%22');
        const data = await res.json();
        console.log(data);
        setBooks(data.items);
    },[])

    useEffect(()=>{
        getBooks();
    },[getBooks])

  return (
    <div>
      <h1>Book Store</h1>
      <ul>
        {
        books.map(book=>(
            <li key={books.id}>
                <Link to={`/book/${book.id}`}>{book.volumeInfo.title}</Link>
            </li>
        )
        )
        }
      </ul>
    </div>
  )
}

export default Home
