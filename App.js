// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage'
import HistoryPage from './Components/HistoryList';
import WordDetailsPage from './Components/WordDetails';
import './Designs/Navbar.css'
import './Designs/Historylist.css'
import './Designs/HomePage.css'
import './Designs/Worddetails.css'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route path="/history" element={<HistoryPage/>} />
            <Route path="/word/:word" element={<WordDetailsPage/>} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;

