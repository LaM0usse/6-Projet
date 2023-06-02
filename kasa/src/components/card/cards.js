import logementsData from '../data/data.json'
import './cards.css'
import { Link } from 'react-router-dom'

export default function Card() {
  return (
    
      <section className="cards">
        {/* Map du fichier data.json pour afficher tout les logements sous forme de carte */}
        {logementsData.map((logement) => (
          <Link className="card" key={logement.id} to={`/logement/${logement.id}`}>
          <div className="card-logement" >
            <img className="card-image" src={logement.cover} alt={logement.title} />
            <h2 className="card-title">{logement.title}</h2>
          </div>
          </Link>
        ))}
      </section>
  );
}