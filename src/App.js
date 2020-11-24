// feature 1
import React, {useState, useEffect} from 'react';
import './App.css';
import Products from './components/Products';

function App() {
const [sort, setSort] = useState('')
const [size, setSize] = useState('')
const [isLoading, setIsLoading] = useState(true)
const [products, setProducts] = useState([])

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
            <Products products={products}/>
          </div>
          <div className="side-bar">
            cart
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

