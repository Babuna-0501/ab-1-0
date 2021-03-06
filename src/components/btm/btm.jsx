import './btm.css'
import { Tabs } from "@yazanaabed/react-tabs";
import img1 from '../../assets/wmachine.png';

const btm = () => {
  return (
    <div className='btm'>
        <h2>Гэр ахуйн цахилгаан бараа</h2>
        <div className='tabb'>
        <Tabs
            activeTab={{
                id: "tab1"
            }}
            >
            <Tabs.Tab id="tab1" title="Угаалгын машин" className='title_btm-xl'>
                <div style={{ padding: 10 }}>
                    <section className='wrapper_one'>
                        <img className='img_inner' src={img1} alt="" />
                        <h3>Бүрэн автомат угаалгын машин</h3>
                        <h5>EcoBubble технологитой 15 төрлийн угаах программтай /Өнгө: Цагаан, Угаах жин: 7кг/</h5>
                        <button className='btn'>Авах</button>
                    </section>
                </div>
            </Tabs.Tab>
            <Tabs.Tab id="tab2" title="Тоос сорогч" className='title_btm-xl'>
                <div style={{ padding: 10 }}>
                    <section className='wrapper_one'>
                        <img className='img_inner' src={img1} alt="" />
                        <h3>Бүрэн автомат угаалгын машин</h3>
                        <h5>EcoBubble технологитой 15 төрлийн угаах программтай /Өнгө: Цагаан, Угаах жин: 7кг/</h5>
                        <button className='btn'>Авах</button>
                    </section>
                </div>
            </Tabs.Tab>
            <Tabs.Tab id="tab3" title="Индүү" className='title_btm-xl'>
                <div style={{ padding: 10 }}>
                    <section className='wrapper_one'>
                        <img className='img_inner' src={img1} alt="" />
                        <h3>Бүрэн автомат угаалгын машин</h3>
                        <h5>EcoBubble технологитой 15 төрлийн угаах программтай /Өнгө: Цагаан, Угаах жин: 7кг/</h5>
                        <button className='btn'>Авах</button>
                    </section>
                </div>
            </Tabs.Tab>
        </Tabs>
        </div>
    </div>
  )
}

export default btm