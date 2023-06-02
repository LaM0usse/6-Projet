import { Link } from 'react-router-dom'
import './error.css'

export default function Error() {
    return(
        <div className="error-page">
        <img className="error-image" src="/image/error404.png" alt="erreur 404"/>
        <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
        <Link to='/' className="error-link">Retourner sur la page d'accueil</Link>
        </div> 
    )
}