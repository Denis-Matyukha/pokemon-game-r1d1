import { useState } from 'react';
import cn from 'classnames';
import LOGO from './../../assets/logo.png';
import s from './style.module.css';

const Navbar = () => {

    const [isActive, setActive] = useState(false);

    const onClickHandler = () => {
        setActive(prevValue => !prevValue);
    }

    return (
        <nav className={s.root}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    <img src={LOGO} alt="logo" />
                </p>
                <a className={cn(s.menuButton, {[s.active] : isActive})} href="#" onClick={onClickHandler} >
                    <span></span>
                </a>
            </div>
        </nav>
    );

};

export default Navbar;