import Heading from "../layout/Layout";
import Carousel from "./portfolio-components/Carousel";
import Weddings from "./portfolio-components/Weddings";
import Filmcontainer from "./portfolio-components/Filmcontainer";

export default function Portfolio() {
    return <div className="portfolio_container">
    <Heading title="Portfolio" />
    <Carousel/>
    <Heading title="Bryllup" />
    <Weddings/>
    <h1 className="Film_heading">Filmografi</h1>
    <Filmcontainer/>
    </div>;
}
