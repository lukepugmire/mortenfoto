import { Link } from "react-router-dom";

export default function Weddings() {
    return <div className="weddings_container">
    <div className="wedding_gallery wedding_gallery_1">
        <div className="wedding_card_img"></div>
        <h2>Henriette &#38; Anders</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum, mauris ac aliquet dapibus, nunc neque mattis sapien, sit amet vestibulum odio tellus a augue. Fusce eget massa tempus diam ullamcorper pulvinar. Curabitur quis posuere urna. Donec vitae egestas est. Donec malesuada eu sapien eget sagittis.</p>
    <Link to="./HenrietteOgAnders" className="gallery_link">Vis galleri</Link>
    </div>
    <div className="wedding_gallery wedding_gallery_2">
    <div className="wedding_card_img"></div>
        <h2>Renate &#38; Tore</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum, mauris ac aliquet dapibus, nunc neque mattis sapien, sit amet vestibulum odio tellus a augue. Fusce eget massa tempus diam ullamcorper pulvinar. Curabitur quis posuere urna. Donec vitae egestas est. Donec malesuada eu sapien eget sagittis.</p>
    <Link to="./RenateOgTore" className="gallery_link">Vis galleri</Link>
    </div>
</div>
}
