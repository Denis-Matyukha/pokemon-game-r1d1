import s from './style.module.css';

const Header = ({ title, descr }) => {
    return (
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.container}>
                <h1>
                    {title && <p>This is temporary empty title</p>}
                </h1>
                <p>
                    {descr && <p>This is temporary empty Description!</p>}
                </p>
            </div>
        </header>
    );
};

export default Header;