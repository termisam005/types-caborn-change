import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProductList from './pages/product/ProductList';
import ProductList1 from './pages/product/ProductList1';
import ProductList2 from './pages/product/ProductList2';
import ProductDetail from './pages/product/ProductDetail';
import ProductDetailOption from './pages/product/ProductDetailOption';
import ProductDetailDisable from './pages/product/ProductDetailDisable';


const App:React.FC =()=> {
  return(
    <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<ProductList />} />
          <Route path={'/ProductList1'} element={<ProductList1 />} />
          <Route path={'/ProductList2'} element={<ProductList2 />} />
          <Route path={'/ProductDetail'} element={<ProductDetail />} />
          <Route path={'/Productdetailoption'} element={<ProductDetailOption />} />
          <Route path={'/ProductDetailDisable'} element={<ProductDetailDisable />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;

