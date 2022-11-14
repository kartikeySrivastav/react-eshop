import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Product from './Components/Products/Product';
import Contact from './Components/contact/Contact';
import SingleProduct from './Components/singleProduct/SingleProduct';
import Cart from './Components/cart/Cart';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import { GlobalStyle} from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Header from './Components/Header/Header';
 const App = () => {
  const theme = {
    colors: {
      bg: "#fff",
    }
  }
  return (
  <ThemeProvider theme={theme}>
     <Router>
     <GlobalStyle/>
      <Header/>
      <Routes>
         <Route path='/' element={ <Home/>} />
         <Route path='/about' element={ <About/>} />
         <Route path='/product' element={ <Product/>} />
         <Route path='/contact' element={ <Contact/>} />
         <Route path='/singleProduct/:id' element={ <SingleProduct/>} />
         <Route path='/cart' element={ <Cart/>} />
         <Route path='*' element={ <ErrorPage/>} />
      </Routes>
  </Router>
</ThemeProvider>
  );
};
export default App;