import { useHistory } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import PokemonCard from '../../components/PokemonCard';

import database from '../../service/firebase';

import s from './style.module.css';
import { FireBaseContext } from '../../context/firebaseContext';

const GamePage = () => {

    const firebase = useContext(FireBaseContext)

    let [activePokemons, setActivePokemons] = useState({});

    // const getPokemonsViaDataBase = async () => {
    //     const response = await firebase.getPokemonsViaDataBase();
    // };

    // setActivePokemons(response);
    // database.ref('pokemons').once('value', (snapshot) => {
    //     setActivePokemons(snapshot.val());
    // });

    useEffect(() => {
        // getPokemonsViaDataBase();
        firebase.getPokemonSoket((pokemons) => {
            setActivePokemons(pokemons);
        })
    }, []);


    const onClickHandler = (pokeId) => {
        setActivePokemons(prevState => {

            return Object.entries(prevState).reduce((acc, item) => {
                const key = item[0];
                const pokemon = { ...item[1] };
                if (pokemon.id === pokeId) {
                    !pokemon.active ? pokemon.active = true : pokemon.active = false;

                    firebase.addPokemon(item[0], pokemon);
                    // database.ref('pokemons/' + key).set(pokemon);
                };
                acc[item[0]] = pokemon;
                return acc;
            }, {});
        });
    };

    const history = useHistory();
    const gameBtnHandler = () => { history.push('/') };

    // const addRandomPokemon = () => {
    //     const getRandom = n => Math.ceil(Math.random() * n);
    //     const newKey = database.ref().child('pokemons').push().key;
    //     const getNewPokemon = () => {
    //         return {
    //             "abilities": [
    //                 "keen-eye",
    //                 "tangled-feet",
    //                 "big-pecks"
    //             ],
    //             "base_experience": getRandom(1000),
    //             "height": getRandom(100),
    //             "weight": getRandom(1000),
    //             "id": getRandom(100),
    //             "img": `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getRandom(1000)}.png`,
    //             "name": "Random",
    //             "stats": {
    //                 "hp": getRandom(100),
    //                 "attack": getRandom(100),
    //                 "defense": getRandom(100),
    //                 "special-attack": getRandom(100),
    //                 "special-defense": getRandom(100),
    //                 "speed": getRandom(100)
    //             },
    //             "type": "normal",
    //             "values": {
    //                 "top": getRandom(10),
    //                 "right": getRandom(10),
    //                 "bottom": getRandom(10),
    //                 "left": getRandom(10)
    //             }
    //         }
    //     };
    //     let data = getNewPokemon();

    //     // database.ref('pokemons/' + newKey).set(data).then(()=>getPokemonsViaDataBase());

    // };

    // <button className={s.addBtn} onClick={addRandomPokemon}>

    const handleAddRandomPokemon = () => {
        firebase.addRandomPokemon()
    }
    // const handleAddRandomPokemon = () => {
    //     firebase.addRandomPokemon(async () => {
    //         await getPokemonsViaDataBase();
    //     })
    // }

    return (
        <>
            <button className={s.addBtn} onClick={handleAddRandomPokemon}>
                Click to add a Random pokemon ↓
            </button>

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
                                idTransfer={onClickHandler}
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