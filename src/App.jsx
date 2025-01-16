import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import navLinks from "./data/navLink"
import { dcComicsLinks, shopLinks, dcLinks, sitesLink } from "./data/footerLink"
//import ProductCard from "./components/products/ProductsList"

const App = () => {
    return (
        <>
            <Header menu={navLinks} />
            <Main />
            <Footer dcComicsLink={dcComicsLinks} shopLinks={shopLinks} dcLinks={dcLinks} sitesLink={sitesLink} />

        </>
    )
}

export default App