import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="foot_container">
            <div className="icons">
             <a href="https://www.facebook.com/fotograf.morten.seglem"><i className="fab fa-facebook-square fa-1x"></i></a>
             <a href="https://www.instagram.com/fotograf_morten_seglem/"><i className="fab fa-instagram fa-1x"></i></a>
             <a href="https://www.linkedin.com/in/mortenseglem/?originalSubdomain=no"><i className="fab fa-linkedin-in fa-1x"></i></a>
             <a href="https://vimeo.com/mortenseglem"><i className="fab fa-vimeo-v fa-1x"></i></a>
            </div>
            <div className="copyright">
             <p>Copyright &copy; Morten Seglem &#45; since 2018</p>
             <p>All rights reserved</p>
            </div>
            <Link to="./Login" className="admin">Admin</Link>
        </div>
    )
}
