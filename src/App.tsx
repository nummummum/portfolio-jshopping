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
import ProductDetail from './components/ProductDetail';
import DescReact from './pages/DescReact';
import DescHome from './pages/DescHome';
import DescTS from './pages/DescTS';
function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/outer" element={<Outer />} />
          <Route path="/outer/:id" element={<Outer />} />
          <Route path="/outer/productdetail" element={<ProductDetail />} />
          <Route path="/top" element={<Top />} />
          <Route path="/top/:id" element={<Top />} />
          <Route path="/top/productdetail" element={<ProductDetail />} />
          <Route path="/knit" element={<Knit />} />
          <Route path="/knit/:id" element={<Knit />} />
          <Route path="/knit/productdetail" element={<ProductDetail />} />
          <Route path="/bottom" element={<Bottom />} />
          <Route path="/bottom/:id" element={<Bottom />} />
          <Route path="/bottom/productdetail" element={<ProductDetail />} />
          <Route path="/dress" element={<Dress />} />
          <Route path="/dress/:id" element={<Dress />} />
          <Route path="/dress/productdetail" element={<ProductDetail />} />
          <Route path="/access" element={<Access />} />
          <Route path="/access/:id" element={<Access />} />
          <Route path="/access/productdetail" element={<ProductDetail />} />
          <Route path="/shoesbag" element={<ShoesBag />} />
          <Route path="/shoesbag/:id" element={<ShoesBag />} />
          <Route path="/shoesbag/productdetail" element={<ProductDetail />} />
          <Route path="descreact" element={<DescReact />} />
          <Route path="deschome" element={<DescHome />} />
          <Route path="descts" element={<DescTS />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
