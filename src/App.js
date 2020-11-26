// feature 1
import React, {useState, useEffect} from 'react';
import './App.css';
import Cart from './components/Cart';
// import FilterProd from './components/FilterProd';
import Products from './components/Products';

function App() {
// const [sort, setSort] = useState('')
// const [category, setCategory] = useState('')
const [isLoading, setIsLoading] = useState(true)
const [products, setProducts] = useState([])
const [cart, setCart] = useState([])


const removeFromCart =(product) => {
  const cartItems = cart.slice();
  setCart(cartItems.filter(item => item.id !== product.id));
  // cartItems.filter(item => item.id !== product.id);

  // setCart(cartItems)
}

const clearCart =() => {
  // const cartItems = cart.slice();
  setCart([]);
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

  setCart(cartItems)
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
                <Cart cartItems={cart} removeFromCart={removeFromCart} clearCart={clearCart}/>
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

