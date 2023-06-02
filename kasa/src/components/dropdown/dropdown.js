import React, {useState} from 'react'
import './dropdown.css'

function Dropdown(props) {
    // UseState pour gérer l'ouverture ou la fermeture du déroulant
    const [open, setOpen] = useState(false)
    // Fonction du clic sur le bouton du déroulant
    const click = () => {
        setOpen(!open)
        console.log(props.description)
    }

    return (
        <div className="dropdown">
            <button onClick={click}>{props.name}<i id="chevron" className={`fa-solid ${open ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i></button>
            {/* Contenu du déroulant s'il est ouvert */}
            {open && (
            <div>
                {Array.isArray(props.description) ? (
                <ul>
                    {props.description.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
                ) : (
                <p>{props.description}</p>
                )}
            </div>
            )}
        </div>
    )
}

export default Dropdown