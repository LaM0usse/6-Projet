import './logement.css'
import Header from '../header/header'
import Footer from '../footer/footer'
import Carousel from '../carousel/carousel'
import Dropdown from '../dropdown/dropdown'

import { useParams, Navigate } from 'react-router-dom'
import locationData from '../data/data.json'

export default function LogementPage() {
        // Récupération de l'id de chaque logement depuis les paramètres de l'URL (useparams)
        const { id } = useParams()
        // Recherche du logement correspondant dans le fichier data.json
        const location = locationData.find((item) => item.id === id);
        // Si l'id n'est pas défini redirection vers pas la page error 404
        if (location === undefined)  {
            return <Navigate to ="*" />
        }
        const hostName = location.host.name.split(' ')
        //Boucle for pour générer les étoiles de notation en fonction du "rating" du fichier data.json
        const Rating = []
        for (let i=1; i <= 5; i++ ){
            if (i <= location.rating) {
            Rating.push(<span key={i}><i className="fa-solid fa-star red-stars stars"></i></span>)
        } else {
            Rating.push(<span key={i}><i className="fa-solid fa-star grey-stars stars"></i></span>)
        }}
 
    return(
        <>
        <Header />
        <Carousel sliderImage = {location.pictures} />
        <main className="logement-info">
            <section className="logement-first-section">
                <h1 className="logement-title">{location.title}</h1>
                <h2 className="logement-location">{location.location}</h2>
                <div className="logement-tags-section">
                    {location.tags.map((tag, index)=> {
                        return(
                            <span key={index} className="logement-tags">{tag}</span>
                        )
                    })}
                </div>
            </section>
            <section className="logement-second-section">
                <div className="logement-host">
                    <p className="logement-host-name">{hostName[0]}<br/>{hostName[1]}</p>
                    <img className="logement-host-picture" src={location.host.picture} alt="Propriétaire" />
                </div>
                <p>{Rating}</p> 
            </section>
            
        </main>

        <section className="logement-dropdown-section">
                <div className="logement-dropdown">
                    <Dropdown name={"Description"} description={location.description}/>
                </div>
                <div className="logement-dropdown">
                    <Dropdown name={"Equipements"} description={location.equipments}/>
                </div>
            </section>
        <Footer />
        </>
    )
}
