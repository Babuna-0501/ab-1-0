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
import Step3 from './components/purchase/step3/step3';
import Terms from './components/terms/terms';
import About from './components/about/about';
import ProductList from './components/productList/productList'
import Loan from './components/purchase/loan/loan';
import Condition from './components/purchase/condition/condition'

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
            <Route path="/about">
              <About/>
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
            <Route path="/productList">
              <ProductList/>
            </Route>
            <Route path="/basket">
              <Basket/>
            </Route>
            <Route path="/terms">
              <Terms/>
            </Route>
            <Route path="/product/purchase"> 
              <Purchase/> 
            </Route>
            <Route path="/product/step2"> 
              <Step2/> 
            </Route>
            <Route path="/product/step3"> 
              <Step3/> 
            </Route>
            <Route path="/product/loan"> 
              <Loan/> 
            </Route>
            <Route path="/product/condition"> 
              <Condition/> 
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
