import { useContext } from "react"
import { DataContext } from "../App"
const Comp2 = () => {
    const data = useContext(DataContext);
  return (
    <div>
        <h1>Name: {data.name}</h1>
        <p>Age: {data.age}</p>
        <p>City: {data.city}</p>
    </div>
  )
}

export default Comp2
