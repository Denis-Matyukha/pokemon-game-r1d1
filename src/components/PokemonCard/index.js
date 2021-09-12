import { useState } from 'react';

import s from './style.module.css';
import cn from 'classnames';

import CardBackSide from '../../assets/card-back-side.jpg';

const PokemonCard = ({type, name, img, id, values}) => {

    const[isActive] = useState(true);

    const onClickHandler = () => {
        console.log(`pokemon ${name}`);
    };

    return (
        <>
            <div className={s.root} onClick={onClickHandler}>
                
                <div className={`${s.pokemonCard} ${isActive ? s.active : ''}`}>
                {/* <div className={cn(s.pokemonCard, s.active)}> */}
                {/* нерабочий вариант использования classnames↓ */}
                {/* <div className={cn(s.pokemonCard, {s.active: isActive})}> */}
                {/* попробовать исправить с использованием ↓ */}
                {/* var arr = ['b', { c: true, d: false }];
                classNames('a', arr); // => 'a b c' */}


                    <div className={s.cardFront}>
                        <div className={cn(s.wrap, s.front)}>
                            <div className={cn(s.pokemon, s[type])}>
                                <div className={s.values}>
                                    <div className={cn(s.count, s.top)}>{values.top}</div>
                                    <div className={cn(s.count, s.right)}>{values.right}</div>
                                    <div className={cn(s.count, s.bottom)}>{values.bottom}</div>
                                    <div className={cn(s.count, s.left)}>{values.left}</div>
                                </div>
                                <div className={s.imgContainer}>
                                    <img src={img} alt={name} />
                                </div>
                                <div className={s.info}>
                                    <span className={s.number}>#{id}</span>
                                    <h3 className={s.name}>{name}</h3>
                                    <small className={s.type}>Type: <span>{type}</span></small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={s.cardBack}>
                        <div className={cn(s.wrap, s.back)}>
                            <img src={CardBackSide} alt="Сard Backed" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default PokemonCard;