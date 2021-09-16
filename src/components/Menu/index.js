import { Link } from 'react-router-dom';
import cn from 'classnames';
import s from './style.module.css';

const MENU = [
    {
        title: 'HOME',
        to: 'welcome',
    },
    {
        title: 'GAME',
        to: 'game',
    },
    {
        title: 'ABOUT',
        to: 'about',
    },
    {
        title: 'CONTACT',
        to: 'contact',
    },
]

const Menu = ({ isOpen , onClickHandler}) => {

    /*
    Нужна ли тут, в самом низко-уровневом компоненте,
    в <Link/> или <Menu>
    Проверка на наличие prop-са onClickHandler ??

    p.s.
    Он служит для сокрытия анимации меню при переходе по ссылке
    */

    return (
        <>
            <div className={cn(s.menuContainer, {
                [s.active]: isOpen === true,
                [s.deactive]: isOpen === false
            })}>
                <div className={s.overlay} />

                <div className={s.menuItems}>

                    <ul>
                        {
                            MENU.map(({ title, to }, index) => (
                                <li key={index}>
                                    <Link to={to} onClick={onClickHandler}>
                                        {title}
                                    </Link>
                                    
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

        </>
    );

};

export default Menu;