import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Shop from './layouts/Shop'
import ShopCategory from './layouts/ShopCategory'
import LoginSignUp from './layouts/LoginSignUp'
import Cart from './layouts/Cart'
import Product from './layouts/Product'
import Footer from './components/Footer'
import men_banner from "/banner_mens.png";
import women_banner from "/banner_women.png";
import kid_banner from "/banner_kids.png";
import ShopContextProvider from './context/ShopContext'

function App() {
  return (
    <>
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/men' element={<ShopCategory />} banner={men_banner} category='men' />
            <Route path='/women' element={<ShopCategory />} banner={women_banner} category='women' />
            <Route path='/kids' element={<ShopCategory />} banner={kid_banner} category='kid' />
            <Route path='product' element={<Product />}>
              <Route path=':productId' element={<Product />} />
            </Route>
            <Route path='/login' element={<LoginSignUp />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ShopContextProvider>
    </>
  )
}

export default App
