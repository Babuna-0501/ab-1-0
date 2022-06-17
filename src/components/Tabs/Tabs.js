import React, { Component } from "react";
import TabsList from "./TabsList";
import TabsItem from "./TabsItem";
import TabsContent from "./TabsContent";
import { TabsStyle } from "./TabsStyle";
import Product from '../product/Product';
import Product2 from '../product2/product2';
import Product3 from '../product3/product3';
import Product4 from '../product4/product4';
import Phone from '../product_phone/phone';
import Watch from '../product_watch/watch';
import './style.css';

class Tabs extends Component {
  state = {
    selectedTab: 0
  };

  handleClick = itemIndex => {
    this.setState({
      selectedTab: itemIndex
    });
  };

  render() {
    let data = [
      { id: 1, title: "Tab 1" },
      { id: 2, title: "Tab 2" },
      { id: 3, title: "Tab 3" }
    ];
    return (
      <TabsStyle>
        <TabsList>
          {data.map((item, index) => (
            <TabsItem
              handleClick={this.handleClick.bind(this, index)}
              className={this.state.selectedTab === index ? "active" : ""}
              key={item.id}
            >
              {item.title}
            </TabsItem>
          ))}
        </TabsList>
        <div className="tabs__content-wrapper">
          <TabsContent tabId="0" activeTab={this.state.selectedTab}>
            <Product/><Product2/><Product4/><Product3/><Product/><Product2/><Product4/><Product3/>
          </TabsContent>
          <TabsContent tabId="1" activeTab={this.state.selectedTab}>
            tab content 2
          </TabsContent>
          <TabsContent tabId="2" activeTab={this.state.selectedTab}>
            tab content 3
          </TabsContent>
        </div>
      </TabsStyle>
    );
  }
}

export default Tabs;
