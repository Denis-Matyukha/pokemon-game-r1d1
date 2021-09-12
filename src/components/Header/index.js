import s from './style.module.css';

const Header = ({ title, children }) => {
    return (
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.container}>
                
                {title && <h1>{title}</h1>}
                
                {children}
                
            </div>
        </header>
    );
};

export default Header;