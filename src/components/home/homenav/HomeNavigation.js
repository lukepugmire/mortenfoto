import { Link } from "react-router-dom";

export default function HomeNavigation() {
    return <div className="home_navigation">
        <div className="home_logo home_grid">
            <p className="logo_text_lg">Morten Seglem</p><p className="logo_text_sm">Fotograf</p>
        </div>
        <div className="home_call_to_action home_grid">
            <Link to="./HenrietteOgAnders" className="call_to_action">Vis Galleri</Link>
        </div>
        <div className="home_nav_links home_grid">
        <Link to="./Portfolio" className="nav_link">Portfolio</Link>
        <Link to="./Priser" className="nav_link">Priser</Link>
        <Link to="./OmMeg" className="nav_link">OmMeg</Link>
        <Link to="./Kontakt" className="nav_link">Kontakt</Link>
        </div>
        <div className="home_icons home_grid">
             <a href="https://www.facebook.com/fotograf.morten.seglem"><i className="fab fa-facebook-square fa-lg"></i></a>
             <a href="https://www.instagram.com/fotograf_morten_seglem/"><i className="fab fa-instagram fa-lg"></i></a>
             <a href="https://www.linkedin.com/in/mortenseglem/?originalSubdomain=no"><i className="fab fa-linkedin-in fa-lg"></i></a>
             <a href="https://vimeo.com/mortenseglem"><i className="fab fa-vimeo-v fa-lg"></i></a>
            </div>
        
    </div>
}
