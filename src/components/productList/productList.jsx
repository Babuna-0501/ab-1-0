import './productList.css'
import { Tabs } from "@yazanaabed/react-tabs";
import Product from '../product/Product';



const productList = () => {
  return (
    <div className='productList'>
        <Tabs
          activeTab={{
              id: "tab1"
          }}
          >
          <Tabs.Tab id="tab1" title="Телевизор" className='list-wrapper'>
              <div className='prod-wrapper'><Product/><Product/><Product/></div>
          </Tabs.Tab>
          <Tabs.Tab id="tab2" title="Хөргөгч / хөлдөөгч" className='list-wrapper'>
              <div className='prod-wrapper'><Product/><Product/><Product/><Product/></div>
          </Tabs.Tab>
          <Tabs.Tab id="tab3" title="Плетка" className='list-wrapper'>
              <div className='prod-wrapper'><Product/><Product/><Product/></div>
          </Tabs.Tab>
          <Tabs.Tab id="tab4" title="Дуков" className='list-wrapper'>
              <div className='prod-wrapper'><Product/><Product/><Product/><Product/></div>
          </Tabs.Tab>
          <Tabs.Tab id="tab5" title="Хиншүү сорогч" className='list-wrapper'>
              <div className='prod-wrapper'><Product/><Product/><Product/></div>
          </Tabs.Tab>
          <Tabs.Tab id="tab6" title="Аяга таваг угаагч" className='list-wrapper'>
              <div className='prod-wrapper'><Product/><Product/><Product/><Product/></div>
          </Tabs.Tab>
          <Tabs.Tab id="tab7" title="Угаалгын машин" className='list-wrapper'>
              <div className='prod-wrapper'><Product/><Product/><Product/></div>
          </Tabs.Tab>
          <Tabs.Tab id="tab8" title="Тоос сорогч" className='list-wrapper'>
              <div className='prod-wrapper'><Product/><Product/><Product/><Product/></div>
          </Tabs.Tab>
          <Tabs.Tab id="tab9" title="Индүү" className='list-wrapper'>
              <div className='prod-wrapper'><Product/><Product/><Product/></div>
          </Tabs.Tab>
        </Tabs>
        <div className="btm_view">
            <div>Төлөх дүн</div>
          
            <div>1,229,900₮</div>
        </div>
    </div>
  )
}

export default productList