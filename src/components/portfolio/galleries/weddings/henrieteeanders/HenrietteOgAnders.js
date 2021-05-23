import Gallery from "react-photo-gallery";
import Heading from "../../../../layout/Layout";
import { Link } from "react-router-dom";
import { Gallery1Photos } from "../../../../photoarrays/Gallery1Photos"

export default function HenrietteOgAnders() {
    return <div className="photo_gallery">
        <div className="galleri_1_box">
        <Heading title="Henriette &#38; Anders" />
        </div>
        <Gallery photos={Gallery1Photos} />
        <Link to="./Portfolio" className="return_link">Back to Portfolio</Link>
        </div>

}
