import Fotopakker from "./bryllup/Fotopakker";
import Video from "./bryllup/Video";
import Tilbehør from "./bryllup/Tilbehør";

export default function Bryllup() {
    return (
        <div className="price_bryllup_container">
            <div className="price_bryllup_img"></div>
            <Fotopakker/>
            <Video/>
            <Tilbehør />
        </div>
    )
}
