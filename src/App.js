import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Test from './components/test';

import { Route, Routes } from 'react-router-dom';
import Product_details from './components/Product_details';

import { CartProvider } from './components/Context/CartContext';

function App() {

  return (
    <>
    <CartProvider>

      <Header />
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/product_details/:productId' element={<Product_details />} />
        <Route path='/products' element={<Test />} />
      </Routes>
      <Footer />
      </CartProvider>
    </>
  );
}

export default App;
