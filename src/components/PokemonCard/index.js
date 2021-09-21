import { useState } from 'react';

import s from './style.module.css';
import cn from 'classnames';

import CardBackSide from '../../assets/card-back-side.jpg';

const PokemonCard = ({ type, name, img, id, values, active , idTransfer}) => {

    const [isActive, setActive] = useState(active);

    const onClickHandler = () => {
        idTransfer && idTransfer(id);
        isActive ? setActive(false) : setActive(true);
    };

    return (
        <>
            <div className={s.root} onClick={onClickHandler}>

                <div className={cn(s.pokemonCard, { [s.active]: active })}>

                    <div className={s.cardFront}>
                        <div className={cn(s.wrap, s.front)}>
                            <div className={cn(s.pokemon, s[type])}>
                                <div className={s.values}>
                                    <div className={cn(s.count, s.top)}>{values && values.top}</div>
                                    {/* <div className={cn(s.count, s.top)}>{values && values.top && values.top}</div> */}
                                    <div className={cn(s.count, s.right)}>{values && values.right}</div>
                                    {/* <div className={cn(s.count, s.right)}>{values && values.right && values.right}</div> */}
                                    <div className={cn(s.count, s.bottom)}>{values && values.bottom}</div>
                                    {/* <div className={cn(s.count, s.bottom)}>{values && values.bottom && values.bottom}</div> */}
                                    <div className={cn(s.count, s.left)}>{values && values.left}</div>
                                    {/* <div className={cn(s.count, s.left)}>{values && values.left && values.left}</div> */}
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