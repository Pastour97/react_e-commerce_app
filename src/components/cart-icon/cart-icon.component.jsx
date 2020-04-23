import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { ReactComponent as ShoppingIcon } from './../../assets/shopping-bag.svg';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

/******** THIS SHIT IS CALLED A SELECTOR
it will call everytime anything changes in our state so it's a perfomance unreliability
SOLUTION:
    caching (memoization) & using re-selector library

const mapStateToProps = ({ cart: { cartItems }}) => {
    console.log('I am being called');
    return{
        itemCount: cartItems.reduce((accumlatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
    }
}
*********/

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})



export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);