import { DataContext } from "../App"

const Comp1 = () => {
  return (
    <DataContext.Consumer>
        {
            data=>(
                <div>
                    <h1>Name: {data.name}</h1>
                    <p>Age: {data.age}</p>
                    <p>City: {data.city}</p>
                </div>
            )
        }
    </DataContext.Consumer>
  )
}

export default Comp1
