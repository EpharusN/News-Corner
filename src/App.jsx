import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FetchData from "./components/FetchData";
import Footer from "./components/Footer";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <>
      <Router>
        <Navbar handleSearch={handleSearch} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/general" element={<FetchData cat="general" />} />
          <Route path="/business" element={<FetchData cat="business" />} />
          <Route
            path="/entertainment"
            element={<FetchData cat="entertainment" />}
          />
          <Route path="/health" element={<FetchData cat="health" />} />
          <Route path="/science" element={<FetchData cat="science" />} />
          <Route path="/sports" element={<FetchData cat="sports" />} />
          <Route path="/technology" element={<FetchData cat="technology" />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
