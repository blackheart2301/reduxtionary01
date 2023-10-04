import React from 'react';
import { connect } from 'react-redux';
//import { useNavigation } from 'react-router-dom'; // For navigation
import { fetchWordDetails } from '../redux/actions/historyAction.js'; // Replace with your actual action file

const HistoryPage = ({ history, clearHistory }) => {
  const historyList = history.map((word, index) => (
    <div key={index} className="history-item" onClick={() => navigateToWordDetails(word)}>
      {word}
    </div>
  ));

  const navigateToWordDetails = (word) => {
    // Navigate to the word details page (replace with your routing logic)
    fetchWordDetails(word);

  };

  const handleClearHistory = () => {
    clearHistory();
  };

  return (
    <div className="history-page">
      <div className="header">
        <h1>Search History</h1>
      </div>
      <div className="history-list">
        {historyList}
      </div>
      <button className="clear-button" onClick={handleClearHistory}>Clear History</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  history: state.history, // Replace with your actual Redux state property
});

export default connect(mapStateToProps)(HistoryPage); // Connect to Redux actions
