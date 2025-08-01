
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Layout from './components/Layout'

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout></Layout>}>
    <Route index element={<Home></Home>}></Route>
    <Route path='shop' element={<Shop></Shop>}></Route>
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
