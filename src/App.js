import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'
import ThemeContext from './ThemeContext';
import Checkout from './checkout/Checkout'
import ProductDetails from './ProductList/ProductDetails';
import Home from './Home/Home'

const App = ()=> {
  const [keyword, setKeyword] = useState('')
  const [dark, setDark] = useState(false)

  const toggleDark = () =>{
    setDark(isDark=>!isDark)
  }
  
  return (
    <ThemeContext.Provider 
      value = {{dark:dark, toggle:toggleDark }}>
      <div className={`App ${dark ? 'light':'dark'} `}>
        <Router>
          <NavBar setKeyword={setKeyword}/>
          <Switch>
            <Route path="/checkout/" component={Checkout} />
            <Route path="/product/:productId/" component={ProductDetails}/>
            <Route path="/" component={()=><Home keyword={keyword}/>   }/>
          </Switch>
        </Router>
        <Footer/>
      </div>
    </ThemeContext.Provider>
    
  );
}

export default App;
