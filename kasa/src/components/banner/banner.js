import './banner.css'
export default function Banner(props) {
    return(
        <>
        <p className="banner-text">{props.text}</p>
        <img className="banner" src={props.URL} alt="bannière"/>
        </>
    )
}