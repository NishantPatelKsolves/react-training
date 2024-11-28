import { useState } from 'react';

const Form = () => {

    const [input, setInput] = useState('');
    const [submittedValue, setSubmittedValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedValue(input);
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type something"
          />
          <button type="submit">Submit</button>
          {submittedValue && <p>Submitted: {submittedValue}</p>}
        </form>
      );
    }

export default Form
