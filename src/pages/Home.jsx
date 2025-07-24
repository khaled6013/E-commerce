import Add from "../components/Add"
import Banner from "../components/Banner"
import Information from "../components/Information"
import Navbar from "../components/Navbar"
import NavbarB from "../components/NavbarB"

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <NavbarB></NavbarB>
      <Banner></Banner>
      <Information></Information>
      <Add></Add>
    </>
  )
}

export default Home