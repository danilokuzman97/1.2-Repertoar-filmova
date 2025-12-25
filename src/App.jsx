import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Movies from "./components/Movies";
import About from "./components/About";
import AppInfo from "./components/AppInfo";
import AuthorInfo from "./components/AuthorInfo";
import MovieForm from "./components/MovieForm";


function App() {
  return (
    <BrowserRouter>
     <Header />
      <div style={{ paddingBottom: '500px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/add" element={<MovieForm />} />
          <Route path="/about" element={<About />}>
            <Route path="app" element={<AppInfo />} />
            <Route path="author" element={<AuthorInfo />} />
          </Route>
        </Routes>
      </div>
     <Footer />
    </BrowserRouter>
  );
}

export default App;
