import './basket.css'
import Product from '../product/Product'

const Basket = () => {
  return (
    <div className='basket'>
        <div>
            <h3>Таны сагс хоосон байна</h3>
            <p>Төлбөр төлхөөсөө өмнө сагсандаа бараа хийнэ үү.</p>
        </div>
        <div>
            <h4>Сүүлд үзсэн бараа</h4>
            <Product/>
        </div>
    </div>
  )
}

export default Basket