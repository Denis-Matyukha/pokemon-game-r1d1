import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PokemonCard from '../../components/PokemonCard';

import database from '../../service/firebase';

import s from './style.module.css';


const GamePage = () => {

    let [activePokemons, setActivePokemons] = useState({});

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            console.log(`  UseEffect сработал  `);
            console.log(snapshot.val());
                setActivePokemons(snapshot.val());
        });
    }, []);


    const toggleActivePokemon = (pokeId) => {
        setActivePokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = { ...item[1] };
                if (pokemon.id === pokeId) {
                    pokemon.active = true;
                };
                acc[item[0]] = pokemon;
                return acc;
            }, {});
        });
    };

    const history = useHistory();
    const gameBtnHandler = () => { history.push('/') }

    return (
        <>
            <div id="test" className={s.flex}>

                {
                    Object.entries(activePokemons).map(([key, { name, id, img, type, values, active }]) => {

                        return (
                            <PokemonCard
                                key={key}
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