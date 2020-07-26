import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector'

import './checkout.styles.scss';

const checkoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>

            <div className='header-block'>
                <span>Product</span>
            </div>

            <div className='header-block'>
                <span>Description</span>
            </div>

            <div className='header-block'>
                <span>Quantity</span>
            </div>

            <div className='header-block'>
                <span>Price</span>
            </div>

            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        }
        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>
        <div className='test-warning'>
            Plz use one of these test cards:
            <br />
            <a 
                href='https://stripe.com/docs/testing#cards'
                style={{
                    textDecoration: 'underline',
                    color: 'blue'
                }}>
            https://stripe.com/docs/testing#cards</a>
        </div>
        <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(checkoutPage);