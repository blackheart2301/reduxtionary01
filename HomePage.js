import React, { useState } from 'react';
import { fetchWordDetails } from '../redux/actions/historyAction.js'; // Replace with your actual action file
import WordDetails from './WordDetails.js';

const Homepage = ({ searchWord }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      fetchWordDetails(searchTerm); // Dispatch the searchWord action with the search term
    }
  };

  return (
    
      <div className="search-container">
        <h2>Search for a Word</h2>
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter a word"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <WordDetails/>
      </div>
  );
};

export default Homepage; // Connect to Redux actions
