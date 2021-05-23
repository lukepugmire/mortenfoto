import Gallery from "react-photo-gallery";
import Heading from "../../../../layout/Layout";
import { Link } from "react-router-dom";
import { Gallery2Photos } from "../../../../photoarrays/Gallery2Photos"


export default function RenateOgTore() {
    return <div className="photo_gallery">
    <div className="galleri_1_box">
    <Heading title="Renate &#38; Tore" />
    </div>
    <Gallery photos={Gallery2Photos} />
    <Link to="./Portfolio" className="return_link">Back to Portfolio</Link>
    </div>
}
