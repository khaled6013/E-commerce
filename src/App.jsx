
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Layout from './components/Layout'
import ProductDetails from './pages/ProductDetails'
import Cart from './components/Cart'
import CheckOut from './components/CheckOut'

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout></Layout>}>
    <Route index element={<Home></Home>}></Route>
    <Route path='shop' element={<Shop></Shop>}></Route>
    <Route path='cart' element={<Cart></Cart>}></Route>
    <Route path='shop/:id' element={<ProductDetails></ProductDetails>}></Route>
    <Route path='checkout' element={<CheckOut></CheckOut>}></Route>
  </Route>
))

function App() {


  return (
  
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
