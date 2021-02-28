import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <p>Users added: {cart.length}</p>
            <p>Total salary of the added users: {
                cart.reduce((sum, user) => sum + user.salary, 0)
            }</p>
        </div>
    );
};

export default Cart;