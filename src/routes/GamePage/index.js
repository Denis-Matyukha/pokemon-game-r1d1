import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import PokemonCard from '../../components/PokemonCard';
import POKEMONS from '../../pokemons';
import s from './style.module.css';

let pokemonsInGame = JSON.parse(JSON.stringify(POKEMONS));
pokemonsInGame.forEach(item => item.active = false);

const GamePage = () => {

    const [activePokemons, setActivePokemons] = useState(pokemonsInGame);

       const toggleActivePokemon = (pokeId) => {
        activePokemons.map(item => {
            if (item.id === pokeId) {
                item.active = !item.active;
            }
            return item;
        });
        setActivePokemons(activePokemons);
    };

    const history = useHistory();
    const gameBtnHandler = () => { history.push('/') }

    return (
        <>
            <div id="test" className={s.flex}>

                {
                    pokemonsInGame.map(({ name, id, img, type, values, active }) => {

                        return (
                            <PokemonCard
                                key={id}
                                name={name}
                                id={id}
                                img={img}
                                type={type}
                                values={values}
                                active={active}
                                idTransfer={toggleActivePokemon}
                            />)
                    })
                }

            </div>

            <div className={s.wrap}>
                this is Game Page component.
                <button className={s.gameBackBtn} onClick={gameBtnHandler}>
                    ← Back to Home Page
                </button>
            </div>
        </>
    );
};

export default GamePage;