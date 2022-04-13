import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/home/Home.jsx'
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import ProductDetail from './components/productDetail/ProductDetail';
import Basket from './components/basket/Basket';

function App() {
  
  return (
    <Router>
      <Navbar/>
        <div className='container'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            {/* <Route path="/product/:productId">
              <Product />
            </Route> */}
            <Route path="/product/detail">
              <ProductDetail/>
            </Route>
            <Route path="/basket">
              <Basket/>
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
