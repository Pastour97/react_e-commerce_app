import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'; 


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_pj8AATxx1ttgrlSWnupTDqmQ00UwjQiiYC';

    const onToken = token => {
        console.log( " in tokene haroomi ", token);
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token,
            }
        }).then(_response => {
            alert('Payment Successful');
        }).catch(error => {
            console.log('payment error : ', error);
            alert(
                'There was an issue with your payment! please be sure you use the provided credit card.'
            );
        });
    };

    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;
