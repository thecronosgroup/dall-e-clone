import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import cronos_logo from './assets/cronos_logo.png';
import { Home, CreatePost } from './page';

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-black sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={cronos_logo} alt="logo" id="main-logo" className="object-contain" />
      </Link>

      
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
