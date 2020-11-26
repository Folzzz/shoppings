import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { toast } from 'react-toastify';

import './cart.css'

toast.configure();

function CheckOutForm({totalAmount}) {

    const onToken = async(token) => {
 
        const response = await axios.post('./server.js/checkout', {
            token,
            totalAmount
        })
        const { status }= response.data
        if(status ==='success') {
            toast('Success! check mail for details', { type: 'success'})
        } else {
            toast('Failed! something went wrong', { type: 'error'})
        }
      };
    

    return (
        <div>
            <StripeCheckout
            stripeKey="pk_test_51HridRCI8tr1Dv2N20jAUmwgmQroXrXQfJICNKMrffgPmAkbhIAwLTigvwJPAnUqjGWEt9JNutvDkrVXM2utNLkR00lEoYNTy9"
            token={onToken}
            billingAddress
            shippingAddress
            amount={totalAmount * 100}

            label="Proceed 💳"

            />

            {/* <button className="button primary">
                Proceed
            </button> */}
        </div>
    )
}

export default CheckOutForm
