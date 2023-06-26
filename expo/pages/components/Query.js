import React, { useState } from 'react';
import axios from 'axios';


function Query() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendQuery();
  };

  const sendQuery = async () => {
    try {
      const response = await axios.post(
        'https://data-value-tool.up.railway.app/chatbot-query',
        { query }
      );
      // Set the response data to state
      setResponse(JSON.parse(response.data));
    } catch (error) {
      // Handle any errors here
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleQueryChange}
          placeholder="Enter your query"
        />
        <button type="submit">Send Query</button>
      </form>
      {response && <h1>{response.Response}</h1>}
    </div>
  );
}

export default Query