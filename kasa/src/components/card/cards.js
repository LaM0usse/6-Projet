import logementsData from '../data/data.json'
import './cards.css'

export default function Card() {
  return (
    <section className="cards">
      {logementsData.map((logement) => (
        <div className="card-logement" key={logement.id}>
          <img className="card-image" src={logement.cover} alt={logement.title} />
          <h2 className="card-title">{logement.title}</h2>
        </div>
      ))}
    </section>
  );
}