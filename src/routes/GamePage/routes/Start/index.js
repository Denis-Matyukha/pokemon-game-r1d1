import { useHistory } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import PokemonCard from '../../../../components/PokemonCard';

import s from './style.module.css';
import { FireBaseContext } from '../../../../context/firebaseContext';

const StartPage = () => {

    const firebase = useContext(FireBaseContext)

    let [activePokemons, setActivePokemons] = useState({});

    useEffect(() => {
        firebase.getPokemonSoket((pokemons) => {
            setActivePokemons(pokemons);
        });

        return () => firebase.offPokemonSoket();
    }, []);


    // const onClickHandler = (pokeId) => {
        // setActivePokemons(prevState => {
        //     return Object.entries(prevState).reduce((acc, item) => {
        //         const key = item[0];
        //         const pokemon = { ...item[1] };
        //         if (pokemon.id === pokeId) {
        //             !pokemon.active ? pokemon.active = true : pokemon.active = false;
        //             firebase.addPokemon(item[0], pokemon);
        //         };
        //         acc[item[0]] = pokemon;
        //         return acc;
        //     }, {});
        // });
    // };

    const handleChangeSelected = (key) => {
        setActivePokemons(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                selected: !prevState[key].selected,
            }
        }))
    }

    const history = useHistory();
    const gameBtnHandler = () => { history.push('/') };

    // const handleAddRandomPokemon = () => {
    //     firebase.addRandomPokemon()
    // }

    return (
        <>
            <button className={s.addBtn}>
                Start Game
            </button>

            <div id="test" className={s.flex}>

                {
                    // Object.entries(activePokemons).map(([key, { name, id, img, type, values, active, selected }]) => {
                    Object.entries(activePokemons).map(([key, { name, id, img, type, values, selected }]) => {

                        return (
                            <PokemonCard
                                className={s.card}
                                key={key}
                                name={name}
                                id={id}
                                img={img}
                                type={type}
                                values={values}
                                active={true}
                                isSelected={selected}
                                // idTransfer={onClickHandler}
                                onClickCard={()=>{handleChangeSelected(key)}}
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