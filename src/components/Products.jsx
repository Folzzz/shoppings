import React from 'react';
import currencyFormat from '../util';
import './products.css';

function Products({products, addToCart}) {

    // const clickedOn=() => {
    //     addToCart()
    // }

    return (
        <div>
          <ul className="products">
            {products.map(product => (
                <li key={product.id} className="product-list">
                    <div className="product">
                        <a href={`#${product.id}`}>
                            <img src={product.image} alt={product.description}/>
                            <p>
                                {product.title}
                            </p>
                        </a>
                        <div className="product-price">
                            <div>
                                {currencyFormat(product.price)}
                            </div>
                            <button onClick={() => addToCart(product)} className="button primary">
                                Add To Cart
                            </button>
                        </div>
                    </div>

                </li>
            ))}
          </ul>  
        </div>
    )
}

export default Products
