import './App.css';
import {Component} from 'react'
import Advice from './components/Advice';
class App extends Component{
  constructor(props){
    super(props);
    this.state={toggleDisplay:true}
  }
  render(){
    return (
      <div>
      <button onClick={()=>{this.setState(pre=> ({toggleDisplay:!pre.toggleDisplay}))}}>&times;</button>
      {/* Button added for unmount functionality */}
      {
        this.state.toggleDisplay && <Advice/>
      }
      </div>
    )
  }
}



export default App;
