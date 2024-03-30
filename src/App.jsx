import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Shop from './layouts/Shop'
import ShopCategory from './layouts/ShopCategory'
import LoginSignUp from './layouts/LoginSignUp'
import Cart from './layouts/Cart'
import Product from './layouts/Product'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory />} category='men' />
          <Route path='/women' element={<ShopCategory />} category='women' />
          <Route path='/kids' element={<ShopCategory />} category='kid' />
          <Route path='product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/login' element={<LoginSignUp />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
