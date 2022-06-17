import './banner.css'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Img1 from '../../assets/banner-1.jpg';
import Img2 from '../../assets/hero_banner.png';
import Img3 from '../../assets/banner-3.jpg';
import Img4 from '../../assets/Img1.png'
 
function Banner() {
  return <div className='banner'>
      <Carousel
      // autoPlay
      // infiniteLoop
      showStatus={false}
      showIndicators={true}
      showThumbs={false}
      // interval={5000}
      className='carousel'
      >
        <div>
            <img loading='lazy' src={Img1} alt="" />
        </div>
        <div style={{position:"relative"}}>
            <img loading='lazy' src={Img2} alt="" />
            <button className='hero_btn'>Авах</button>
        </div>
        <div>
            <img loading='lazy' src={Img3} alt="" />
        </div>
      </Carousel>
  </div>;
}

export default Banner;