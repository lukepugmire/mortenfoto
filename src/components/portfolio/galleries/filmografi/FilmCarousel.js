import Heading from "../../../layout/Layout";
import { Link } from "react-router-dom";


export default function FilmCarousel() {
    return  <div className="filmografi_container">
            <Heading title="Filmografi"/>
            <div className="films">
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/340610444" frameBorder="0" allowFullScreen></iframe>
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/182135153" frameBorder="0" allowFullScreen></iframe>
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/467481412" frameBorder="0" allowFullScreen></iframe>
        </div>  
        <Link to="./Portfolio" className="return_link">Back to Portfolio</Link>
        </div>

}


