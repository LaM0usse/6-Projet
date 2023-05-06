import { Link } from 'react-router-dom'
import './header.css' 
export default function Header() {
    return(
        <header>
            <img src="./image/logo-red.svg" alt="logo Kasa"/>
            <nav>
                <Link to='/' className="link-header">Accueil</Link>
                <Link className="link-header">A propos</Link>
            </nav>
        </header>
    )
};