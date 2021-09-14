import s from './style.module.css';

const GamePage = ({backToHomeHandler}) => {

    const gameBtnHandler = () => {
        backToHomeHandler && backToHomeHandler('home')
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