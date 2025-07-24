import Add from "../components/Add"
import Arrivals from "../components/Arrivals"
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
      <Arrivals></Arrivals>
    </>
  )
}

export default Home