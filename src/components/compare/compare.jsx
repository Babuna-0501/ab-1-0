import './compare.css';
import Img1 from "../../assets/dust_clean_sm.png";
import Img2 from "../../assets/wash_m_sm.png";
import Brand from "../../assets/Samsung-Symbol.svg";
import Footer from "../footer/footer";
import Bg from "../../assets/shape_bg98.svg"

const Compare = () => {
  return (
      <>  
        <img className='bg_comp' src={Bg} alt="" />
        <div className='compare'>
            <div className='compare_item1'>
                <div className='compare_item1--container'>
                    <img className='compare_item--img1' src={Img1} alt="lazy" />
                    <div className='compare_item1--wrapper'>
                        <div className='title'>Тоос сорогч</div>
                        <div className='compare_detail pd'>Bagless Vacuum Cleaner</div>
                        <div className='compare_size pd'>Хэмжээ: 40х28х24 см</div>
                        <div className='compare_weight pd'>Жин: 4.8</div>
                        <div className='compare_extra pd'>Утастай</div>
                        <div className='compare_brand pd'><img src={Brand} alt="" /></div>
                        <div className='compare_price pd'>319,900₮ <span>639,800₮</span></div>
                    </div>
                </div>
                <div className='compare_item1--bottom'>
                    <div>Үндсэн мэдээлэл:</div>
                    <table className='compare_item1--bottom--sub'>
                        <div>   
                            <div>Нэр:</div>
                            <div>Хэмжээ:</div>
                            <div>Жин:</div>
                            <div>Тайлбар:</div>
                        </div>
                        <div className='sub--sub2'>
                            <div><span>Toshiba</span></div>
                            <div><span>Bagless Vacuum</span></div>
                            <div><span>Cleaner</span></div>
                            <div><span>40х28х24 см</span></div>
                        </div>
                    </table>
                    <button>САГСАНД ХИЙХ</button>
                </div>
            </div>
            <div className='compare_item2'>
                <div className='compare_item2--container'>
                    <img className='compare_item--img2' src={Img2} alt="lazy" />
                    <div className='compare_item2--wrapper'>
                        <div className='title'>Угаалгын машин</div>
                        <div className='compare_detail pd'>Бүрэн автомат, EcoBubble </div>
                        <div className='compare_size pd'>технологи</div>
                        <div className='compare_weight pd'>15 төрлийн угаах программтай</div>
                        <div className='compare_extra pd'>Угаах жин: <span>7кг</span></div>
                        <div className='compare_brand pd'><img src={Brand} alt="" /></div>
                        <div className='compare_price pd'>319,900₮ <span>639,800₮</span></div>
                    </div>
                </div>
                <div className='compare_item2--bottom'>
                    <div>Үндсэн мэдээлэл:</div>
                    <table className='compare_item2--bottom--sub'>
                        <div>   
                            <div>Нэр:</div>
                            <div>Хэмжээ:</div>
                            <div>Жин:</div>
                            <div>Тайлбар:</div>
                        </div>
                        <div className='sub--sub2'>
                            <div><span>Toshiba</span></div>
                            <div><span>Bagless Vacuum</span></div>
                            <div><span>Cleaner</span></div>
                            <div><span>40х28х24 см</span></div>
                        </div>
                    </table>
                </div>
                <button>САГСАНД ХИЙХ</button>
            </div>
        </div>
        <Footer/>
      </>
  )
}

export default Compare