import React from 'react';
import styles from './home.scss';
import Images1 from '../images/makeUp1.jpg'
import Tush from '../products/tush';
import Lipstick from '../products/lipstick';
import Eyeshadow from '../products/eyeshadow';
import Nailpolish from '../products/nailpolish';
import Eyeliner from '../products/eyeliner';

const Home = () => {  
    return (
        <div className='home'>
        
            <div className='cosmetics__images'>
                <img src={Images1} alt="cosmetic__photo"/>
                <div className="cosmetics__info">
                    <h1>Твоя суперсила - быть красивой</h1>                        
                    <p>с новинками и бестселлерами бьюти-мира по специальным ценам</p>
                </div>
            </div>
            <div className='product'>
                <Eyeshadow/>
                <Lipstick/>
                <Nailpolish/>
                <Tush/>
                <Eyeliner/>
            </div>
       </div>
       
    );
}

export default Home;
