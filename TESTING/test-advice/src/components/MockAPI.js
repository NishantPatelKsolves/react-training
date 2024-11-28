import { useEffect, useState } from 'react';
const MockAPI = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch('/api/data')
        .then((res) => res.json())
        .then((result) => setData(result));
    }, []);
  
    return <p>{data ? `Data: ${data}` : 'Loading...'}</p>;
}

export default MockAPI
