import {useDispatch, useSelector} from 'react-redux'
import { removeBook } from '../features/readingList/readingListSlice';
const ReadingList = () => {
    const readingList = useSelector((state)=>state.readingList) 
    const dispatch = useDispatch();
    console.log('ReadingList:',readingList);
    if (!readingList) {
      return <p>No reading list available.</p>;
    }
  return (
    <div>
      <h3>User Reading List</h3>
      {
        readingList.map((b,i)=>
          <div key={i} style={{backgroundColor:"teal"}}>
            <p>Title: {b.volumeInfo.title}</p>
            <p>Authors: {b.volumeInfo.authors?.map((a,i)=><span key={i}>{a}</span>)}</p>
            <button onClick={()=>{dispatch(removeBook(b))}}>Add to reading List</button>
          </div>
        )
      }
    </div>
  )
}

export default ReadingList
