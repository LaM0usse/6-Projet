import Header from '../header/header'
import Banner from '../banner/banner'
import Dropdown from '../dropdown/dropdown'
import Footer from '../footer/footer'

import Dataabout from '../data/dataabout.json'

export default function App() {
    return(
        <>
        <Header />
        <Banner URL="./image/banner2.png" largeHeight="true"/>
        <div className="about">
            {/* Map du fichier Dataabout.json pour afficher chaque élément des déroulants */}
            {Dataabout.map((data) => {
                return(
                    <Dropdown key={data.title} name={data.title} description={data.description}/>
                )
            })
            }
        </div>
        <Footer />
        </>
    )
}