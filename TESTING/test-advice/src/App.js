import logo from './logo.svg';
import './App.css';
import Advice from './components/Advice';
import Counter from './components/Counter';
import Form from './components/Form';
import MockFunction from './components/MockFunction';
import MockAPI from './components/MockAPI';

function App({advice='Be Kind!'}) {
  return (
    <div>
      <Advice advice={advice}/>
      <Counter/>
      <br/>
      <br/>
      <Form/>
      <br/>
      <br/>
      <MockFunction/>
      <br/>
      <br/>
      <MockAPI/>
    </div>
  );
}

export default App;
