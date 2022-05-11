import './productList.css'
import { Tabs } from "@yazanaabed/react-tabs";


const productList = () => {
  return (
    <div className='productList'>
      <Tabs
          activeTab={{
              id: "tab1"
          }}
          >
          <Tabs.Tab id="tab1" title="Цахилгаан бараа">
              <div className='prod-wrapper' style={{ padding: 10 }}></div>
          </Tabs.Tab>
          <Tabs.Tab id="tab2" title="Гар утас">
              <div style={{ padding: 10 }}>This is tab 2</div>
          </Tabs.Tab>
          <Tabs.Tab id="tab3" title="Компьютер">
              <div style={{ padding: 10 }}>This is tab 3</div>
          </Tabs.Tab>
      </Tabs>
    </div>
  )
}

export default productList