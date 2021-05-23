import AliceCarousel from 'react-alice-carousel';
import HomeNavigation from "./homenav/HomeNavigation";

const handleDragStart = (e) => e.preventDefault();

const items = [
    <div onDragStart={handleDragStart} className="home_carousel home_carousel_img1"></div>,
    <div onDragStart={handleDragStart} className="home_carousel home_carousel_img2"></div>,
    <div onDragStart={handleDragStart} className="home_carousel home_carousel_img3"></div>,
    <div onDragStart={handleDragStart} className="home_carousel home_carousel_img4"></div>,
];

export default function Hjemside() {
    return <div className="home_container">
    <div className="home_slider">
    <AliceCarousel  disableDotsControls disableButtonsControls touchTracking infinite={true} mouseTracking animationDuration={3000} autoPlayInterval={3000} autoPlay={true} animationType="fadeout" items={items} />
    </div>
    <HomeNavigation />
    </div>;
}







