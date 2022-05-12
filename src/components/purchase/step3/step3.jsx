import './step3.css'
import Statebank from '../../../assets/logos/state_bank.png'
import Xacbank from '../../../assets/logos/Xac_bank.jpeg'
import HHbank from '../../../assets/logos/ HHB.jpeg'
import Ub from '../../../assets/logos/ub_bank.png'
import Xaan from '../../../assets/logos/xaanbank.png'
import Mm from '../../../assets/logos/mm.jpeg'
import Ni from '../../../assets/logos/ni.jpeg'

const step3 = () => {
  return (
    <div className='step3'>
        <div className='step3_col'>
            <img src={Xaan} alt="lazy" />
            <p>Хаан Банк</p> 
        </div>
        <div className='step3_col'><img src={Statebank} alt="lazy" /><p>Төрийн Банк</p> </div>
        <div className='step3_col'><img src={Xacbank} alt="lazy" /><p>Хас Банк</p> </div>
        <div className='step3_col'><img src={HHbank} alt="lazy" /><p>Худалдаа Хөгжлийн Банк</p> </div>
        <div className='step3_col'><img src={Mm} alt="lazy" /><p>Most money</p> </div>
        <div className='step3_col'><img src={Ub} alt="lazy" /><p>УБ хотын Банк</p> </div>
        <div className='step3_col'><img src={Ni} alt="lazy" /><p>Үндэсний хөрөнгө оруулалтын Банк</p> </div>
        <div className="btm_view">
            <div>Төлөх дүн</div>
          
            <div>1,229,900₮</div>
        </div>
    </div>
  )
}

export default step3