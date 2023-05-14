import Header from '../header/header'
import Banner from '../banner/banner'
import Cards from '../card/cards'
import Footer from '../footer/footer'

export default function App() {
    return(
        <>
        <Header />
        <Banner URL="./image/banner1.png" text="Chez vous, partout et ailleurs" />
        <Cards />
        <Footer />
        </>
    )
}