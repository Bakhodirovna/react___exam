import React, {useState,useEffect} from 'react';
import styles from './products.scss';
import axios from 'axios'

import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';

const src = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx&product_type=lipstick"

const Lipstick = () => {
    const [articles, setArticles] = useState([]);

    useEffect(()=>{
      axios
        .get(src)
        .then(data => {
          setArticles(data.data);
        })
    }, [])

    const dispatch = useDispatch();
    const handleAddToCart = (article) =>{
        dispatch(addToCart(article));
    };

    return (
            <div className='product'>
                <h3 className='product__title'>
                    Помады
                </h3>
                <div className='product__items'>
                    {articles.map(article => {
                        return (
                            <div className='product__item'>
                                <img className='product__img' src={article.image_link} alt="g" />
                                <div className='product__info'>
                                    <p className='product__name'>
                                    {article.name}
                                    </p>
                                    <p className='product__price'>{article.price} $</p>
                                </div>
                                <p className='product__brand'>
                                    <span>brand: </span>{article.brand}
                                </p>
                                <button onClick={() => handleAddToCart(article)} className='product__btn'>
                                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.105 5.42582L0.163574 1.6486L1.88332 0L5.82353 3.77839H24.3481C24.5376 3.77837 24.7244 3.82081 24.8937 3.90231C25.0629 3.98381 25.21 4.10212 25.3231 4.2478C25.4362 4.39347 25.5123 4.56247 25.5451 4.74132C25.578 4.92016 25.5668 5.1039 25.5124 5.27786L22.5956 14.5986C22.5205 14.8387 22.3667 15.0492 22.157 15.1988C21.9472 15.3485 21.6927 15.4293 21.4312 15.4293H6.53573V17.7595H19.9047V20.0896H5.32037C4.99803 20.0896 4.6889 19.9669 4.46098 19.7484C4.23305 19.5299 4.105 19.2336 4.105 18.9246V5.42582ZM6.53573 6.10857V13.0991H20.527L22.7147 6.10857H6.53573ZM5.92805 24.75C5.44455 24.75 4.98085 24.5659 4.63896 24.2381C4.29707 23.9104 4.105 23.4659 4.105 23.0024C4.105 22.5389 4.29707 22.0943 4.63896 21.7666C4.98085 21.4389 5.44455 21.2547 5.92805 21.2547C6.41155 21.2547 6.87525 21.4389 7.21714 21.7666C7.55903 22.0943 7.7511 22.5389 7.7511 23.0024C7.7511 23.4659 7.55903 23.9104 7.21714 24.2381C6.87525 24.5659 6.41155 24.75 5.92805 24.75ZM20.5124 24.75C20.0289 24.75 19.5652 24.5659 19.2233 24.2381C18.8815 23.9104 18.6894 23.4659 18.6894 23.0024C18.6894 22.5389 18.8815 22.0943 19.2233 21.7666C19.5652 21.4389 20.0289 21.2547 20.5124 21.2547C20.9959 21.2547 21.4596 21.4389 21.8015 21.7666C22.1434 22.0943 22.3355 22.5389 22.3355 23.0024C22.3355 23.4659 22.1434 23.9104 21.8015 24.2381C21.4596 24.5659 20.9959 24.75 20.5124 24.75Z" fill="white"/>
                                    </svg>
                                    Добавить в корзину
                                </button>
                            </div>
                        )
                        })} 
                </div>
            </div>    
    );
}

export default Lipstick;
