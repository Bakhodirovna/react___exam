import React from 'react';
import styles from './basket.scss'
import Image from '../images/basket.png'
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../../features/cartSlice';


const Basket = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch()

    useEffect(()=> {
         dispatch(getTotals());                                                                                                                                                                                                                                                                                                           
    },[cart, dispatch]  )

    const handleRemoveFromCart = (cartItem) =>{
        dispatch(removeFromCart(cartItem));
    }

    const handleDecreaseCart = (cartItem) =>{
        dispatch(decreaseCart(cartItem))
    }
    const handleIncreaseCart = (cartItem) =>{
        dispatch(addToCart(cartItem))
    }
    const handleClearCart = () =>{
        dispatch(clearCart())
    }

    return (
        <div className='basket'>
            <h2>Корзина</h2>
            {cart.cartItems.length === 0 ? (
              <div className="basket__empty">
                <img src={Image} alt="basket" />
                <h3>
                    Корзина пуста
                </h3>
                <p>
                    Но это никогда не поздно исправить :)
                </p>
                    <NavLink className='basket__empty__link' to='/'>
                        <button>
                        В каталог товаров
                        </button>
                    </NavLink>
            </div>  
            ) : (
                <div className='basket__box'>
                    <div className="basket__items">
                        {cart.cartItems?.map(cartItem =>(
                            <div className='basket__item' key={cartItem.id}>
                                <div className="basket__product product">
                                    <div className="product__about">
                                        <img className='product__img' src={cartItem.image_link} alt={cartItem.name} />
                                        <div className='product__desc'>
                                            <h3>
                                                {cartItem.name}
                                            </h3>
                                            <p>
                                                ${cartItem.price}
                                            </p>
                                        </div>
                                        <button onClick={() => handleRemoveFromCart(cartItem)} className='product__remove'>
                                            <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.8843 3.4H20.8663V5.1H18.8735V16.15C18.8735 16.3754 18.7685 16.5916 18.5816 16.751C18.3948 16.9104 18.1413 17 17.8771 17H3.92764C3.66338 17 3.40995 16.9104 3.22309 16.751C3.03623 16.5916 2.93125 16.3754 2.93125 16.15V5.1H0.938477V3.4H5.92042V0.85C5.92042 0.624566 6.0254 0.408365 6.21226 0.248959C6.39912 0.0895533 6.65255 0 6.91681 0H14.8879C15.1522 0 15.4056 0.0895533 15.5925 0.248959C15.7793 0.408365 15.8843 0.624566 15.8843 0.85V3.4ZM16.8807 5.1H4.92403V15.3H16.8807V5.1ZM12.3113 10.2L14.0729 11.7028L12.664 12.9047L10.9024 11.4019L9.14075 12.9047L7.73186 11.7028L9.49347 10.2L7.73186 8.6972L9.14075 7.4953L10.9024 8.9981L12.664 7.4953L14.0729 8.6972L12.3113 10.2ZM7.9132 1.7V3.4H13.8915V1.7H7.9132Z" fill="#DF6464"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="product__quantity">
                                        <div className='quantity__btns'>
                                            <button className='plus__btn ' onClick={() => handleDecreaseCart(cartItem)}>-</button>
                                            <p>{cartItem.cartQuantity}</p>
                                            <button className='plus__btn' onClick={() =>handleIncreaseCart(cartItem)}>+</button>
                                        </div>
                                        <h3>
                                            ${cartItem.price * cartItem.cartQuantity}
                                        </h3>
                                    </div>
                                 </div>
                            </div>
                            
                        ))}
                    </div>
                    <div className="basket__summary">
                        <div className='subtotal'>
                        <div>
                            <span>
                                ИТОГО
                            </span>
                            <span>
                                ${cart.cartTotalAmount}
                            </span>
                        </div>
                         <NavLink to='/register'>
                            <button className='btn'>
                                Перейти к оформлению
                            </button>
                         </NavLink>
                        </div>
                        <NavLink className='basket__empty__link' to='/'>
                            <button className='btn btn__style'>
                               ← Продолжайте шоппинг
                            </button>
                        </NavLink>
                        <button onClick={() => handleClearCart()} className='btn__style btn'>
                                очистить корзину 
                        </button>
                           
                    </div>
                </div>
            )}
            
        </div>
    );
}

export default Basket;
