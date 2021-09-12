import s from './style.module.css';
import cn from 'classnames';

import CardBackSide from './assets/card-back-side.jpg';

const PokemonCard = ({...props}) => {

    console.log(`###`, props);
    
    return (
        <>
            <div  className={s.root}>
                <div className={s.pokemonCard}>
                    <div className={s.cardFront}>
                        <div className={cn(s.wrap, s.front)}>
                            <div className={s.pokemon}>
                                <div className={s.values}>
                                    <div className={cn(s.count, s.top)}></div>
                                    <div className={cn(s.count, s.right)}></div>
                                    <div className={cn(s.count, s.bottom)}></div>
                                    <div className={cn(s.count, s.left)}></div>
                                </div>
                                <div className={s.imgContainer}>
                                    <img src="<-- Pokemon Picture -->" alt="<-- Name Pokemon -->" />
                                </div>
                                <div className={s.info}>
                                    <span className={s.number}>#{}</span>
                                    <h3 className={s.name}></h3>
                                    <small className={s.type}>Type: <span></span></small>
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