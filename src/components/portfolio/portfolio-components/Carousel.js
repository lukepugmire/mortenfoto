import { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';


const items = [
    <div className="item item1" data-value="1"></div>,
    <div className="item item2" data-value="2"></div>,
    <div className="item item3" data-value="3"></div>,
    <div className="item item4" data-value="4"></div>,
    <div className="item item5" data-value="5"></div>,
    <div className="item item6" data-value="6"></div>,
    <div className="item item7" data-value="7"></div>,
    <div className="item item8" data-value="8"></div>,
    <div className="item item9" data-value="9"></div>,
    <div className="item item10" data-value="10"></div>,
    <div className="item item11" data-value="11"></div>,
    <div className="item item12" data-value="12"></div>,
    <div className="item item13" data-value="13"></div>,
    <div className="item item14" data-value="14"></div>,
    <div className="item item15" data-value="15"></div>,
    <div className="item item16" data-value="16"></div>,
];

const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
    return items.map((item, i) => (
        <div className="thumb" onClick={() => (setThumbIndex(i), setThumbAnimation(true))}>
            {item}
        </div>
    ));
};

const Carousel = () => { 
    
    const [mainIndex, setMainIndex] = useState(0);
    const [mainAnimation, setMainAnimation] = useState(false);
    const [thumbIndex, setThumbIndex] = useState(0);
    const [thumbAnimation, setThumbAnimation] = useState(false);
    const [thumbs] = useState(thumbItems(items, [setThumbIndex, setThumbAnimation]));

    const slideNext = () => {
        if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
            setThumbAnimation(true);
            setThumbIndex(thumbIndex + 1);
        }
    };

    const slidePrev = () => {
        if (!thumbAnimation && thumbIndex > 0) {
            setThumbAnimation(true);
            setThumbIndex(thumbIndex - 1);
        }
    };

    const syncMainBeforeChange = (e) => {
        setMainAnimation(true);
    };

    const syncMainAfterChange = (e) => {
        setMainAnimation(false);

        if (e.type === 'action') {
            setThumbIndex(e.item);
            setThumbAnimation(false);
        } else {
            setMainIndex(thumbIndex);
        }
    };

    const syncThumbs = (e) => {
        setThumbIndex(e.item);
        setThumbAnimation(false);

        if (!mainAnimation) {
            setMainIndex(e.item);
        }
    };

    return <div className="carousel_container">
            <AliceCarousel
            activeIndex={mainIndex}
            animationType="fadeout"
            animationDuration={1000}
            infinite
            disableDotsControls
            disableButtonsControls
            items={items}
            mouseTracking={!thumbAnimation}
            onSlideChange={syncMainBeforeChange}
            onSlideChanged={syncMainAfterChange}
            touchTracking={!thumbAnimation}
            keyboardNavigation
       />
        
       <div className="thumbs">
       <div className="btn-prev" onClick={slidePrev}>&lang;</div>
           <AliceCarousel
                activeIndex={thumbIndex}
                infinite={true}
                disableDotsControls
                disableButtonsControls
                autoWidth={true}
                items={thumbs}
                mouseTracking={false}
                onSlideChanged={syncThumbs}
                touchTracking={!mainAnimation}
           />
           <div className="btn-next" onClick={slideNext}>&rang;</div>
       </div>
    </div>
    
};


export default Carousel 