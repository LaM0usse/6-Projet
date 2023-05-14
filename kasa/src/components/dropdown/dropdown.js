import React, {useState} from 'react'
import './dropdown.css'

function Dropdown(props) {
    // UseState pour gérer l'ouverture ou la fermeture du déroulant
    const [open, setOpen] = useState(false)
    // Fonction du clic sur le bouton du déroulant
    const click = () => {
        setOpen(!open)
    }

    return(
        <div className="dropdown">
            <button onClick={click}>{props.name}<i className={`fa-solid ${open ? 'fa-chevron-up' : 'fa-chevron-down'} rotate`}></i></button>
            {/* Contenu du déroulant s'il est ouvert */}
            {open && (
                <div>
                <p>{props.description}</p>
                </div>
            )}
        </div>
    )
}
export default Dropdown