import {Component} from 'react'
import PropTypes from 'prop-types'

export class Timer extends Component{
    constructor(props){
        super(props);
        this.state={
            time:props.startTime,
            running:false
        }
        this.timerId=null;
    };

    startTimer = () => {
        if (!this.state.running) {
          this.setState({ running: true });
          this.timerId = setInterval(() => {
            this.setState((prevState) => ({ time: prevState.time + this.props.incrementValue }));
          }, this.props.interval);
        }
      };

      pauseTimer = () => {
        if (this.state.running) {
          clearInterval(this.timerId);
          this.setState({running: false });
        }
      };

      resetTimer = () => {
        clearInterval(this.timerId);
        this.setState(
            {
            time: this.props.startTime, 
            running: false }
        );
      };

    //   //start timer on component mount
    //   componentDidMount(){
    //     this.startTimer();
    //   }

        // //
        // componentWillUnmount(){
        //     clearInterval(this.timerId);
        // }

    render(){
        return (
            <div>
        <p>{this.state.time}</p>
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.pauseTimer}>Pause</button>
        <button onClick={this.resetTimer}>Reset</button>
            </div>
        )
    }
}

Timer.defaultProps = {
    startTime: 0, // start timer at 0
    incrementValue: 1, // increase value by 1 
    interval: 1000, // 1-second interval
  };

  Timer.propTypes = {
    startTime: PropTypes.number, 
    incrementValue: PropTypes.number,
    interval: PropTypes.number,
  };