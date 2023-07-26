import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Banner.css'
import bannerImg1 from '../../../assets/home/banner1.jpg'
import bannerImg2 from '../../../assets/home/banner2.jpg'
import bannerImg3 from '../../../assets/home/banner3.jpg'
import bannerImg4 from '../../../assets/home/banner4.jpg'
import bannerImg5 from '../../../assets/home/banner5.jpg'
const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={bannerImg1} />
                </div>
                <div>
                    <img src={bannerImg2} />
                </div>
                <div>
                    <img src={bannerImg3} />
                </div>
                <div>
                    <img src={bannerImg4} />
                </div>
                <div>
                    <img src={bannerImg5} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;