import Header from '../header/header'
import Footer from '../footer/footer'
import Carousel from '../carousel/carousel'

import { useParams } from 'react-router-dom';
import locationData from '../data/data.json'

export default function LogementPage() {
        // Récupération de l'id de chaque logement depuis les paramètres de l'URL (useparams)
        const { id } = useParams()
        // Recherche du logement correspondant dans le fichier data.json
        const location = locationData.find((item) => item.id === id);
 
    return(
        <>
        <Header />
        <Carousel sliderImage = {location.pictures} />
        <Footer />
        </>
    )
}
