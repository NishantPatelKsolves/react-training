import './App.css';
import { Timer } from './components/Timer';
import {Component} from 'react'

function App() {
    return (
    <div>
      <p>
        Hello Timer
      </p>
      <ErrorBoundary>
      <Timer/>
      </ErrorBoundary>
    </div>
  );
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error name:", error);
    console.error("Error trace:", info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default App;
