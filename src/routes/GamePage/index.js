import { useHistory } from 'react-router-dom';
import { useState } from 'react'; 
import PokemonCard from '../../components/PokemonCard';
import POKEMONS from '../../pokemons';
import s from './style.module.css';


// делаю полную копию массива объектов POKEMONS для дальнейшей работы без мутаций ↓
let pokemonsInGame = JSON.parse(JSON.stringify(POKEMONS));
// в скопированном массиве добавляю каждому элементу дополнительное свойство "active" ↓   
pokemonsInGame.forEach(item => item.active = false);

const GamePage = () => {

    const [activePokemons, setActivePokemons] = useState(pokemonsInGame);

    const toggleActivePokemon = (pokeId) => {        
        let clickedPokemon = activePokemons.filter(item => item.id === pokeId)[0];
        !clickedPokemon.active ? clickedPokemon.active = true : clickedPokemon.active = false;
        // ↑ так как это действие привело к изменению массива [activePokemons], 
        // то этим массивом обновляем state ↓
        setActivePokemons(activePokemons);
        
        console.log(` #### Updated State [pokemonGamers] ↓ `);
        console.table(activePokemons);
    }

    const history = useHistory();
    const gameBtnHandler = () => { history.push('/') }

    return (
        <>
            <div id="test" className={s.flex}>
                
                {
                    pokemonsInGame.map(({ name, id, img, type, values, active}) => {

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