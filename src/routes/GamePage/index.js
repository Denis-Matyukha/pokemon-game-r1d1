import { useHistory } from 'react-router-dom';
import PokemonCard from '../../components/PokemonCard';
import POKEMONS from '../../pokemons';
import s from './style.module.css';

const GamePage = ({ onChangePage }) => {
    const history = useHistory();
    const gameBtnHandler = () => {
        history.push('/');
    }

    return (
        <>
            <div id="test" className={s.flex}>
                {
                    POKEMONS.map(({ name, id, img, type, values }) =>

                        <PokemonCard
                            key={id}
                            name={name}
                            id={id}
                            img={img}
                            type={type}
                            values={values} />)

                }
                {console.log(` test ↓ `)}
                {console.log(` POKEMONS ↓ `)}
                {console.log(POKEMONS)}
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