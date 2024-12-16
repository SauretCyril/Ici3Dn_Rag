import React, { useState } from 'react';

const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleGenerate = async () => {
    try {
      const res = await fetch(`/generate?query=${query}`);
      const data = await res.text();
      setResponse(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResponse('Error fetching data');
    }
  };

  return (
    <div>
      <h1>RAG Application</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your query"
      />
      <button onClick={handleGenerate}>Generate</button>
      <p>{response}</p>
    </div>
  );
};

export default App;