// feature 1
import React, {useState, useEffect} from 'react';
import './App.css';
import Cart from './components/Cart';
import Products from './components/Products';

function App() {
const [products, setProducts] = useState([])
const [cart, setCart] = useState(localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [])


const removeFromCart =(product) => {
  const cartItems = cart.slice();
  setCart(cartItems.filter(item => item.id !== product.id));
  // cartItems.filter(item => item.id !== product.id);
  localStorage.setItem("cartItems", JSON.stringify(cartItems.filter(item => item.id !== product.id)));
  
}

const clearCart =() => {
  // const cartItems = cart.slice();
  setCart([]);
  localStorage.setItem("cartItems", JSON.stringify([]));
}

const addToCart =(product) => {
  let inCart = false
  const cartItems = cart.slice();
  cartItems.forEach(item => {
    if(item.id === product.id) {
      item.count++;
      inCart =true
    }
  })
  if(!inCart) {
    cartItems.push({...product, count: 1})
  }

  setCart(cartItems);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

const reduceFromCart =(product) => {
  
  const cartItems = cart.slice();
  cartItems.forEach(item => {
    if(item.id === product.id) {
      item.count--;
      
    }
  })


  setCart(cartItems);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}


const endPoint = `https://fakestoreapi.com/products`

const getProductData = async() => {
  const response = await fetch(endPoint)
  const data = await response.json()
  console.log(data);
  setProducts(data);
}

useEffect (() => {
  getProductData()
}, [])

  return (
    <div className="grid-container">
      <header>
        <a href='/'>FX shopping</a>
      </header>

      <main>
        <div className="content">
            <div className="main-bar">
              <Products products={products} addToCart={addToCart}/>
            </div>
    
            <div className="side-bar">
                <Cart cartItems={cart} removeFromCart={removeFromCart} clearCart={clearCart} addToCart={addToCart} reduceFromCart={reduceFromCart}/>
            </div>
        </div>
      </main>

      <footer>
        all right reserved
      </footer>
    </div>
  );
}

export default App;

