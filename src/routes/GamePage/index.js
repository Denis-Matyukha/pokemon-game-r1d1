import { useHistory } from 'react-router-dom';
import { useState } from 'react'; 
import PokemonCard from '../../components/PokemonCard';
import POKEMONS from '../../pokemons';
import s from './style.module.css';



let pokemonsInGame = JSON.parse(JSON.stringify(POKEMONS));
    pokemonsInGame.forEach(item => item.active = false);

    console.log(` pokemonsInGame ↓ `);
    console.log(pokemonsInGame);
    console.log(``);
    console.log(` POKEMONS ↓ `);
    console.log(POKEMONS);

const GamePage = ({ onChangePage }) => {

    const [pokemonGamers, setPokemonGamers] = useState(pokemonsInGame);

    console.log(``);
    console.log(`↓ state ↓ pokemonGamers ↓`);
    console.log(pokemonGamers);
    console.log(``);
    console.log(`↓ state ↓ pokemonGamers[id[25]] ↓`);
    console.log(pokemonGamers.filter(item => item.id === 25));

    const history = useHistory();
    const gameBtnHandler = () => {
        history.push('/');
    }
    
    // const onClickHandler = (e) => {
    //     console.log(` e `);
    //     console.log(e);
    // }
    
    const idTransferHandler = (pokeId) => {        
            console.log(` pokeId `);
            console.log(pokeId);
    }

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
                                idTransfer={idTransferHandler}
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