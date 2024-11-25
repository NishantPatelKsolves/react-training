import { items } from "./data.js"
const BookList = () => {
    console.log(items);
  return (
    <div>
      {items.map(
        (item,i)=><div key={i}>
            <p>Title: {item.volumeInfo.title}</p>
      </div>
      )
      }
    </div>
  )
}

export default BookList
