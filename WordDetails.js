import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'; // For dynamic routing
import { fetchWordDetails } from '../redux/actions/historyAction';// Replace with your actual action file
import Loader from "./Loader";

const WordDetails = (wordDetails,fetchWordDetails)  => {
  const { word } = useParams();

  useEffect(() => {
    fetchWordDetails(word);
  }, [word, fetchWordDetails]);

  if (!word) {
    // Handle loading state or error state
    return (
      <div className="word-details">
        <Loader/>
      </div>
    );
  }

  const { phonetic, phonetics, meanings } = wordDetails;

  return (
    <div className="word-details">
      <h1>{word}</h1>
      <p>Phonetic: {phonetic}</p>
      {phonetics.map((ph, index) => (
        <div key={index}>
          <p>Phonetic Text: {ph.text}</p>
          <audio controls>
            <source src={ph.audio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      ))}
      <h2>Meanings:</h2>
      {meanings.map((meaning, index) => (
        <div key={index}>
          <p>Part of Speech: {meaning.partOfSpeech}</p>
          <h3>Definitions:</h3>
          <ul>
            {meaning.definitions.map((definition, i) => (
              <li key={i}>
                <p>{definition.definition}</p>
                {definition.example && <p>Example: {definition.example}</p>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  wordDetails: state.wordDetails, // Replace with your actual Redux state property
});

export default connect(mapStateToProps, { fetchWordDetails })(WordDetails); // Connect to Redux actions
