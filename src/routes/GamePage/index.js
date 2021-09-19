import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PokemonCard from '../../components/PokemonCard';

import database from '../../service/firebase';

import s from './style.module.css';


const GamePage = () => {

    let [activePokemons, setActivePokemons] = useState({});

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            console.log(`  UseEffect сработал  и snapshot.val() принимает вид ↓`);
            console.log(snapshot.val());
                setActivePokemons(snapshot.val());
        });
    }, []);


    const onClickHandler = (pokeId) => {
        setActivePokemons(prevState => {

            return Object.entries(prevState).reduce((acc, item) => {
                // const key = [ ...item[0] ].join('');
                const key = item[0];
                const pokemon = { ...item[1] };
                if (pokemon.id === pokeId) {
                    !pokemon.active ? pokemon.active = true : pokemon.active = false;
                    // task2 ↓
                    database.ref('pokemons/'+ key).set({
                        ...pokemon, 
                        ...pokemon.active
                    });
                    console.log(`TASK_2 - checkout the result`);
                    // task 2 ↑
                };
                console.log(key);
                // task2 ↓
                // database.ref('pokemons/'+ objID).set({
                    // Один item покемона
                // });
                // task 2 ↑

                acc[item[0]] = pokemon;
                return acc;
            }, {});
        });

        console.log(activePokemons);

        
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