import Heading from "../layout/Layout";
import PriceBlurb from "./pricecomponents/PriceBlurb";
import Bryllup from "./pricecomponents/Bryllup";
import Konfirmant from "./pricecomponents/Konfirmant";
import Portraits from "./pricecomponents/Portraits";

export default function Priser() {
    return <div className="price_container">
        <Heading title="Priser" />
        <PriceBlurb />
        <Heading title="Bryllup" />
        <Bryllup />
        <Konfirmant />
        <Portraits />
    </div>;
}