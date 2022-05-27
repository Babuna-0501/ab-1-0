import './banner.css'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Img1 from '../../assets/slide_img1.png';
import Img2 from '../../assets/slide_img2.png';
import Img3 from '../../assets/slide_img3.png';
import Img4 from '../../assets/Img1.png'
 
function Banner() {
  return <div className='banner'>
      <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={true}
      showThumbs={false}
      interval={5000}
      className='carousel'
      >
        <div>
            <img loading='lazy' src={Img4} alt="" />
        </div>
        <div>
            <img loading='lazy' src={Img2} alt="" />
        </div>
        <div>
            <img loading='lazy' src={Img3} alt="" />
        </div>
      </Carousel>
  </div>;
}

export default Banner;