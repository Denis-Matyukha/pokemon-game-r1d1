import s from './style.module.css';

const Header = ({ title, children, onClickButton }) => {

    const handleClick = () => {
        console.log(`<Header/>`);
        onClickButton && onClickButton('start');
    }

    return (
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.container}>
                
                {title && <h1>{title}</h1>}
                
                {children}

                <button onClick={handleClick}>
                    <code>Start Game</code>
                </button>
                
            </div>
        </header>
    );
};

export default Header;