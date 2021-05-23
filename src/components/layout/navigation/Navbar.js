import { NavLink } from "react-router-dom";
import { useState } from 'react';


export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false);
        }

    }

    window.addEventListener("scroll", changeBackground);


    return (
        <nav className={navbar ? "navigation_bar active" : "navigation_bar"}>
            <NavLink to="/" className="nav_logo" onClick={() => setOpen(false)}>
            <p className="logo_text_lg">Morten Seglem</p><p className="logo_text_sm">Fotograf</p>
            </NavLink>

             <ul className={open ? 'nav_links active' : 'nav_links'}>
                 <li className="nav_item">
                     <NavLink to="/Portfolio" className="nav_link" onClick={() => setOpen(false)}>Portfolio</NavLink>
                 </li>
                 <li className="nav_item">
                 <NavLink to="/Priser" className="nav_link" onClick={() => setOpen(false)}>Priser</NavLink>
                 </li>
                 <li className="nav_item">
                 <NavLink to="/OmMeg" className="nav_link" onClick={() => setOpen(false)}>Om Meg</NavLink>
                 </li>
                 <li className="nav_item">
                 <NavLink to="/Kontakt" className="nav_link" onClick={() => setOpen(false)}>Kontakt</NavLink>
                 </li>
             </ul>
              <div onClick={() => setOpen(!open)} className="burger">
                  <div className={open ? "line line_1" : "line line_1_hover"}></div>
                  <div className={open ? "line line_2" : "line line_2_hover"}></div>
                  <div className={open ? "line line_3" : "line line_3_hover"}></div>
             </div>       
         </nav> 
    );
}
