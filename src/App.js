import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/home/Home.jsx'
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import ProductDetail from './components/productDetail/ProductDetail';
import Basket from './components/basket/Basket';
import Login from './pages/login/Login';
import Purchase from './components/purchase/Purchase';
import Step2 from './components/purchase/step2/step2';

function App() {
  
  return (
    <Router>
      <Navbar/>
        <div className=''>
          <Switch>
            <Route path="/login"> 
              <Login/> 
            </Route>
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
            <Route path="/product/purchase"> 
              <Purchase/> 
            </Route>
            <Route path="/product/step2"> 
              <Step2/> 
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
