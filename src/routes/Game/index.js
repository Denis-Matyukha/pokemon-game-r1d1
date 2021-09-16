import { useHistory } from 'react-router-dom';
import s from './style.module.css';

const GamePage = ({ onChangePage }) => {
    const history = useHistory();
    const gameBtnHandler = () => {
        history.push('/');
    }

    return (
        <>
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