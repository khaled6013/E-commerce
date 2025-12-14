import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import NavbarB from "./NavbarB"
import Footer from "./Footer"
import ChatWidget from "./ChatWidget"

const Layout = () => {
  return (
    <>
     <Navbar></Navbar>
     <NavbarB></NavbarB>
     <Outlet></Outlet>
     <Footer></Footer>
     <ChatWidget></ChatWidget>
    </>
  )
}

export default Layout