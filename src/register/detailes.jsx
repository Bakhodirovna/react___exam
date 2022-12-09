import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './detailes.scss'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,  getTotals, removeFromCart } from '../features/cartSlice';
import { toast } from 'react-toastify';

const Detailes = () => {
    const [logindata, setLoginData] = useState([]);


    const history = useNavigate();

    const [show, setShow] = useState(false);

    var todayDate = new Date().toISOString().slice(0, 10);
  

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Birthday = () => {
        const getuser = localStorage.getItem("user_login");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
         
            setLoginData(user);


            const userbirth = logindata.map((el, k) => {
                return el.date === todayDate
            });

            if (userbirth) {
                setTimeout(() => {
                    console.log("ok");
                    handleShow();
                }, 3000)
            }
        }
    }

    const userlogout = ()=>{
        localStorage.removeItem("user_login")
        history("/");
    }

    useEffect(() => {
        Birthday();
    }, [])


    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch()

    useEffect(()=> {
         dispatch(getTotals());                                                                                                                                                                                                                                                                                                           
    },[cart, dispatch]  )


    return (
        <div className='order__box'>
            <h2>Оформление заказа</h2>
            <div className='shipping__box'>
            <div className="shipping">
                    <div className='shipping__price'>
                        <h3>
                            Доставка курьером
                        </h3>
                        <p>
                            3 $
                        </p>
                    </div>
                    <div className="shipping__address">
                        <h3>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.0379 22L3.70937 15.5563C2.25993 14.2819 1.27286 12.6581 0.872967 10.8905C0.473076 9.12277 0.678327 7.29051 1.46277 5.62539C2.2472 3.96027 3.5756 2.53707 5.27996 1.53576C6.98433 0.534448 8.98812 0 11.0379 0C13.0878 0 15.0916 0.534448 16.7959 1.53576C18.5003 2.53707 19.8287 3.96027 20.6131 5.62539C21.3976 7.29051 21.6028 9.12277 21.2029 10.8905C20.803 12.6581 19.816 14.2819 18.3665 15.5563L11.0379 22ZM16.7382 14.1246C17.8655 13.1333 18.6331 11.8704 18.9441 10.4956C19.2551 9.12075 19.0954 7.69569 18.4852 6.40064C17.8751 5.10558 16.8419 3.99868 15.5163 3.21991C14.1907 2.44114 12.6322 2.02548 11.0379 2.02548C9.44367 2.02548 7.88519 2.44114 6.55959 3.21991C5.23399 3.99868 4.20079 5.10558 3.59065 6.40064C2.98051 7.69569 2.82083 9.12075 3.1318 10.4956C3.44277 11.8704 4.21042 13.1333 5.33768 14.1246L11.0379 19.1366L16.7382 14.1246ZM11.0379 11.1377C10.4271 11.1377 9.8413 10.9243 9.40938 10.5445C8.97746 10.1648 8.73481 9.64969 8.73481 9.11262C8.73481 8.57554 8.97746 8.06047 9.40938 7.6807C9.8413 7.30093 10.4271 7.08757 11.0379 7.08757C11.6488 7.08757 12.2346 7.30093 12.6665 7.6807C13.0984 8.06047 13.3411 8.57554 13.3411 9.11262C13.3411 9.64969 13.0984 10.1648 12.6665 10.5445C12.2346 10.9243 11.6488 11.1377 11.0379 11.1377Z" fill="#101010"/>
                            </svg>    
                            Адрес доставки
                        </h3>
                        <div className='shipping__address__city'>
                            <select name="" id="" required>
                                <option value="">Город </option>
                                <option value="">Ташкент</option>
                                <option value="">Самарканд</option>
                                <option value="">Букхара</option>
                                <option value="">Карши</option>
                                <option value="">Наманган</option>
                            </select>
                            <input required type="text" name="" id="" placeholder='Улица / Район ' />
                        </div>
                        <div className='shipping__address__house'>
                            <input required type="text" name="" id="" placeholder='Дом' />
                            <input required type="text" name="" id="" placeholder='Подъезд' />
                        </div>
                        <input required className='flat' type="number" name="" id="" placeholder='Квартира' />
                    </div>
                </div>
                <div className='shipping__product'>
                    <h3>
                        Ваш заказ
                    </h3>
                    {cart.cartItems?.map(cartItem =>(

                    <div className="shipping__product__items" key={cartItem.id}>
                        <div className='item'>
                            <p className='item__quantity'>{cartItem.cartQuantity}x</p>
                            <p className='item__name'>{cartItem.name}</p>
                            <p className='item__price'>{cart.cartTotalAmount} $</p>
                        </div>

                    </div>
                    ))}
                        <div className='dostavka'>
                            <p>Доставка</p>
                            <p>3 $</p>
                        </div>
                        <div className='total'>
                            <p>К оплате</p>
                            <p>{cart.cartTotalAmount * 3} $</p>
                        </div>
                </div>
            </div>
            <div className="bottom__box">
            <div className="number">
                <h3>
                    Номер получателя
                </h3>
                <input type="number" placeholder='+998 __ ___ __ __' required/>
            </div>
                <button>Закончить оформление</button>
            </div>
        </div>
    )
}


export default Detailes;
