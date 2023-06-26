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
    <div className='max-w-2xl my-2'>
      <form onSubmit={handleSubmit}>
      <div className='bg-white flex justify-between pl-6 pr-2 py-2 rounded-full'>
        <input
          type="text"
          value={query}
          onChange={handleQueryChange}
          placeholder="Enter your query"
          className='w-[70%]'
        />
        <button className='bg-blue-700 text-white rounded-full px-3 py-2' type="submit">Send Query</button>
     </div>
      </form>
      <div className='bg-white mt-2 p-2 rounded-lg transform transition-transform duration-500 ease-out animate-slide-down'>
      {response && <h1>{response.Response}</h1>}
      </div>
    </div>
  );
}

export default Query