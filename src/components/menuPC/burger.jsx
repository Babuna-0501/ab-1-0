import './burger.css'
import Arrow from '../../assets/right_arrow.svg'

const Burger = () => {
  return (
    <div className='burger_xl'>
        <div class="a-header">
                <input type="checkbox" name="main-nav" id="main-nav" class="burger-check"/>
                <label for="main-nav" class="burger menu"><span></span></label>
                <div className='a-header_sub-nav'>       
                    <span>
                      <a href="#">Бүх ангилал</a>
                    </span>
                    <span><a href="#">Цахилгаан бараа</a></span>
                    <span><a href="#">Гар утас</a></span>
                    <span><a href="#">Компьютер</a></span>
                </div>
                <ul>     
                  <span className='ul_span'>
                    <li>
                      <div class="c">
                        <div class="dd">
                          <div class="dd-a"><span><a className='arrow_lg_xl' href="#">Цахилгаан бараа</a> </span></div>
                          <input type="checkbox"/>
                          <div class="dd-c">
                            <ul>
                              <li><a href="#"><span>Телевизор</span></a></li>
                              <li><a href="#"><span>Хөргөгч / хөлдөөгч</span></a></li>
                              <li><a href="#"><span>Плетка</span></a></li>
                              <li><a href="#"><span>Дуков</span></a></li>
                              <li><a href="#">Хиншүү сорогч</a></li>
                              <li><a href="#">Аяга таваг угаагч</a></li>
                              <li><a href="#">Печь</a></li>
                              <li><a href="#">Угаалгын машин</a></li>
                              <li><a href="#">Тоос сорогч</a></li>
                              <li><a href="#">Индүү</a></li>
                            </ul>
                          </div>
                          <div class="dd-d">
                            <ul>
                              <li><a href="#"><span>Телевизор</span></a></li>
                              <li><a href="#"><span>Хөргөгч / хөлдөөгч</span></a></li>
                              <li><a href="#"><span>Плетка</span></a></li>
                              <li><a href="#"><span>Дуков</span></a></li>
                              <li><a href="#">Хиншүү сорогч</a></li>
                              <li><a href="#">Аяга таваг угаагч</a></li>
                              <li><a href="#">Печь</a></li>
                              <li><a href="#">Угаалгын машин</a></li>
                              <li><a href="#">Тоос сорогч</a></li>
                              <li><a href="#">Индүү</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                        <a href="#">Гар утас</a>
                    </li>
                    <li><a className='brd' href="#">Компьютер</a></li>
                    <li><a className='btd' href="#">Сонирхсон бүтээгдэхүүн</a></li>
                    <li><a href="#">Нэвтрэх / Бүртгүүлэх</a></li>
                    <li><a href="#">Компанийн тухай</a></li>
                    <li><a href="#">Үйлчилгээний нөхцөл</a></li>
                  </span>
                </ul>
        </div>
    </div>
  )
}

export default Burger;

