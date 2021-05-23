import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Hjemside from "../../home/Hjemside";
import Kontakt from "../../kontakt/Kontakt";
import OmMeg from "../../ommeg/OmMeg";
import Portfolio from "../../portfolio/Portfolio";
import HenrietteOgAnders from "../../portfolio/galleries/weddings/henrieteeanders/HenrietteOgAnders";
import RenateOgTore from "../../portfolio/galleries/weddings/torerenate/RenateOgTore";
import Konfirmasjons from "../../portfolio/galleries/konfirmant/Konfirmasjons";
import Filmografi from "../../portfolio/galleries/filmografi/Filmografi";
import Priser from "../../priser/Priser";
import Login from "../../login/Login";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer/Footer";

    export default class Nav extends React.Component {     
        
        render () {
            return (
                <Router>
                    
                    <Switch>
                        <Route path="/" exact component={Hjemside} />
                        <div>
                        <Navbar />
                        <Route path="/" exact component={Hjemside} />
                        <Route path="/Portfolio" exact component={Portfolio} />
                        <Route path="/Priser" exact component={Priser} />
                        <Route path="/OmMeg" exact component={OmMeg} />
                        <Route path="/Kontakt" exact component={Kontakt} />
                        <Route path="/HenrietteOgAnders" exact component={HenrietteOgAnders} />
                        <Route path="/RenateOgTore" exact component={RenateOgTore} />
                        <Route path="/Konfirmasjons" exact component={Konfirmasjons}/>
                        <Route path="/Filmografi" exact component={Filmografi}/>
                        <Route path="/Login" exact component={Login}/>
                        </div>
                    </Switch>
                    <Footer />
                </Router>
            )
        }
      }
