import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import Outer from './pages/Outer';
import NotFound from './pages/NotFound';
import './common/common.scss';
import Top from './pages/Top';
import Knit from './pages/Knit';
import Bottom from './pages/Bottom';
import Dress from './pages/Dress';
import Access from './pages/Access';
import ShoesBag from './pages/ShoesBag';
import Header from './components/Header';
function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/outer" element={<Outer />} />
          <Route path="/outer/:id" element={<Outer />} />
          <Route path="/top" element={<Top />} />
          <Route path="/top/:id" element={<Top />} />
          <Route path="/knit" element={<Knit />} />
          <Route path="/knit/:id" element={<Knit />} />
          <Route path="/bottom" element={<Bottom />} />
          <Route path="/bottom/:id" element={<Bottom />} />
          <Route path="/dress" element={<Dress />} />
          <Route path="/dress/:id" element={<Dress />} />
          <Route path="/access" element={<Access />} />
          <Route path="/access/:id" element={<Access />} />
          <Route path="/shoesbag" element={<ShoesBag />} />
          <Route path="/shoesbag/:id" element={<ShoesBag />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
