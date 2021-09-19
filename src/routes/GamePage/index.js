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
                    database.ref('pokemons/' + key).set({
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

        // task 3 ↓
        // const newKey = database.ref().child('pokemons').push().key;
        // console.log(`task_3 newKey ↓`);
        // console.log(newKey);
        // console.log(`task_3 newKey ↑`);
        /*
        const newKey = database.ref().child('pokemons').push().key;
        database.ref('pokemons/' + newKey).set(data);
        */

        // 3.1 сгенерить ключ и тело
        // 3.2 запушить корректно в BD
        // 3.3 обновить компонент из BD

        // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/777.png
        // Math.ceil(Math.random()*1000)
        // task 3 ↑

    };

    const history = useHistory();
    const gameBtnHandler = () => { history.push('/') };

    const addRandomPokemon = () => {
        const getRandom = n => Math.ceil(Math.random() * n);
        const newKey = database.ref().child('pokemons').push().key;
        // const newKey = `-tsk3_TSK3_`;
        const getNewPokemon = () => {
            return {
                "abilities": [
                    "keen-eye",
                    "tangled-feet",
                    "big-pecks"
                ],
                "base_experience": getRandom(1000),
                "height": getRandom(100),
                "weight": getRandom(1000),
                "id": getRandom(100),
                "img": `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getRandom(1000)}.png`,
                "name": "Random",
                "stats": {
                    "hp": getRandom(100),
                    "attack": getRandom(100),
                    "defense": getRandom(100),
                    "special-attack": getRandom(100),
                    "special-defense": getRandom(100),
                    "speed": getRandom(100)
                },
                "type": "normal",
                "values": {
                    "top": getRandom(10),
                    "right": getRandom(10),
                    "bottom": getRandom(10),
                    "left": getRandom(10)
                }
            }
        };
        let data = getNewPokemon();

        database.ref('pokemons/' + newKey).set(data);

        // let newPokemonCard = {[`${newKey}`]: { ...newPokemon }};
        // console.log(`TSK_3 ↓`);
        // console.log(newPokemonCard);
        // console.log({newPokemonCard});
        // console.log(`TSK_3 ↑`);
        // console.log(`!_TSK_3_!   ↓`);
        // console.log({...{[`${newKey}`]: { ...newPokemon }}});
        // console.log({newPokemonCard});
        // console.log(`!_TSK_3_!   ↑`);
        // return {...{[`${newKey}`]: { ...newPokemon }}};

        database.ref('pokemons').once('value', (snapshot) => {
            console.log(`  UseEffect сработал  и snapshot.val() принимает вид ↓`);
            console.log(snapshot.val());
            setActivePokemons(snapshot.val());
        });
        
    };

return (
    <>
        <button className={s.addBtn} onClick={addRandomPokemon}>
            click to add a Random pokemon ↓
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