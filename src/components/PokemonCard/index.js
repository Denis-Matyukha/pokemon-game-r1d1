import s from './style.module.css';
import cn from 'classnames';

const PokemonCard = () => {
    return (
        <>
            <div  className={s.root}>
                <div className={s.pokemonCard}>
                    <div className={s.cardFront}>
                        <div className={cn(s.wrap, s.front)}>
                            <div className="pokemon <-- Type Pokemon -->">
                                <div className={s.values}>
                                    <div className="count top"><-- Count Value --></div>
                                    <div className="count right"><-- Count Value --></div>
                                    <div className="count bottom"><-- Count Value --></div>
                                    <div className="count left"><-- Count Value --></div>
                                </div>
                                <div className={s.imgContainer}>
                                    <img src="<-- Pokemon Picture -->" alt="<-- Name Pokemon -->" />
                                </div>
                                <div className={s.info}>
                                    <span className="number">#{< --ID Pokemon -->}</span>
                                    <h3 className="name"><-- Name Pokemon --></h3>
                                    <small className="type">Type: <span><-- Type Pokemon --></span></small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={s.cardBack}>
                        <div className="wrap back">
                            <img src="<-- Card Backed Picture -->" alt="Сard Backed" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default PokemonCard;