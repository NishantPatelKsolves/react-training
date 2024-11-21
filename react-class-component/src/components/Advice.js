import {Component} from 'react'

class Advice extends Component{
    constructor(props){
        super(props)
        this.state={advice:'',count:1};
    }

    getAdvice = async ()=>{
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        console.log("Data: ", data)
        this.setState({advice:data.slip.advice})
    }

    componentDidMount(){
    this.getAdvice();
    }

    handleClick = ()=>{
        this.getAdvice();
        this.setState(pre=> ({count:pre.count+1}));
    }

    componentWillUnmount(){
        console.log('Component is about to unmount')
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            console.log(`Advice count updated to:${this.state.count}`);
        }
    }

  render(){
    return (
      <div>Hello Advice
        <p>{this.state.advice}</p>
        <button onClick={this.handleClick}>Count: {this.state.count}</button>
      </div>
    )
  }
}

export default Advice;
