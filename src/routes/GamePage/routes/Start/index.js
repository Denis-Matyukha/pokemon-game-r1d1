import { useHistory } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import PokemonCard from '../../../../components/PokemonCard';

import s from './style.module.css';

import { FireBaseContext } from '../../../../context/firebaseContext';
import { PokemonContext } from '../../../../context/pokemonContext';

const StartPage = () => {

    const firebase = useContext(FireBaseContext);

    let pokemonsContext = useContext(PokemonContext);

    const history = useHistory();

    let [pokemons, setPokemons] = useState({});

    useEffect(() => {
        firebase.getPokemonSoket((pokemons) => {
            setPokemons(pokemons);
        });

        return () => firebase.offPokemonSoket();
    }, []);

    const handleChangeSelected = (key) => {
        const pokemon = { ...pokemons[key] };
        pokemonsContext.onSelectedPokemons(key, pokemon);
        setPokemons(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                selected: !prevState[key].selected,
            }
        }))
    };

    const gameBtnHandler = () => { history.push('/') };

    const handleAddRandomPokemon = () => {
        firebase.addRandomPokemon()
    };

    const handleStartGameClick = () => {
        history.push('/game/board');
    };
    
    return (
        <>
            <button className={s.addBtn} onClick={handleAddRandomPokemon}>
                Add Random Pokemon
            </button>

            <button 
                className={s.addBtn} 
                onClick={handleStartGameClick}
                disabled={Object.keys(pokemonsContext.pokemons).length < 5}
            >
                Start Game
            </button>

            <div id="test" className={s.flex}>

                {
                    Object.entries(pokemons).map(([key, { name, id, img, type, values, selected }]) => {

                        return (
                            <PokemonCard
                                className={s.card}
                                key={key}
                                name={name}
                                id={id}
                                img={img}
                                type={type}
                                values={values}
                                isActive={true}
                                isSelected={selected}
                                onClickCard={() => { 
                                    if (Object.keys(pokemonsContext.pokemons).length < 5 || selected) {
                                        handleChangeSelected(key) 
                                    }
                                }}
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

export default StartPage;