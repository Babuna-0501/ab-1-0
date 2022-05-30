import './footer.css';
import { SocialIcon } from 'react-social-icons';

const footer = () => {
  return (
    <div className='footer'>
        <div>
          <span>Холбоо барих</span>
          <span>Утас: 79997000</span>
          <span>И-мэйл: info@abmall.mn</span>
          <span>Хаяг: Маршал Таун, Их Монгол Улсын гудамж,</span>
          <span>17-р хороо, Хан-Уул дүүрэг</span>
        </div>
        <div>
          <span>
            <SocialIcon url="https://twitter.com/apple" bgColor='#000'/>
            <SocialIcon url="https://facebook.com/apple" bgColor='#000'/>
            <SocialIcon url="https://instagram.com/apple" bgColor='#000'/>
          </span>
          <span>©2022 ABMALL. All rights reserved.</span>
          <span>Website by Creative Forces</span>
        </div>
    </div>
  )
}

export default footer