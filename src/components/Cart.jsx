import React from 'react';
import currencyFormat from '../util';
import './cart.css'

function Cart({cartItems, removeFromCart, clearCart}) {
    return (
        <>
        <div>
            {cartItems.length === 0? (<div className="cart cart-header">Cart is empty</div>)
            : 
            (<div className="cart cart-header">You have {cartItems.length} in the cart</div>)
            }

            <div>
                <div className="cart">
                    <ul className="cart-items">
                        {cartItems.map(item => (
                            <li key={item.id} className="cart-item">
                                <div>
                                    <img src={item.image} alt={item.description}/>
                                </div>
                                <div>
                                    <div>
                                        {item.title}
                                    </div>
                                    <div>
                                        {currencyFormat(item.price)} x {item.count} {" "}
                                        <button className='button' onClick={()=> removeFromCart(item)}>
                                            Remove
                                        </button>
                                    </div>
                                    {/* <button onClick={()=> removeFromCart(item)}>
                                        Remove
                                    </button> */}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                {cartItems.length !== 0 && (
                    <div className="cart">
                        <div className="total">
                            <div className='total-val'>
                                Total: {" "}
                                {currencyFormat( 
                                    cartItems.reduce((a,b) =>
                                    a + b.price*b.count, 0
                                ))}
                            </div>
                            <button className="button primary">
                                Proceed
                            </button>
                        </div>

                        <button onClick={()=>clearCart()}>Clear Cart</button>
                    </div>
                )}
                
            </div>
        </div>



        </>
    )
}

export default Cart
