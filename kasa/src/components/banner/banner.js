import './banner.css'
export default function Banner(props) {


    return(
        <div className="banner">
        <p className="banner-text">{props.text}</p>
        <img className={`banner-img ${props.largeHeight ? "banner-large" : ""}`}  src={props.URL} alt="bannière"/>
        </div>
    )
}