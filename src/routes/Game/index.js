import MenuHeader from '../../components/MenuHeader';
import s from './style.module.css';

const GamePage = ({ onChangePage }) => {

    const gameBtnHandler = () => {
        onChangePage && onChangePage('app')
    }

    return (
        <>
            <MenuHeader bgActive/>
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