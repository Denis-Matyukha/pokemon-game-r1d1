import s from './style.module.css';

const GamePage = ({ onChangePage }) => {

    const gameBtnHandler = () => {
        onChangePage && onChangePage('app')
    }

    return (
        <>
            <div className={s.wrap}>
                this is Game Page component.
                <button onClick={gameBtnHandler}>
                    ← Back to Home Page
                </button>
            </div>
        </>
    );
};

export default GamePage;