import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { TestContext } from '../../context/testContext';
import s from './style.module.css';

const AboutPage = () => {
    const history = useHistory();
    const onClickHandler = () => {
        history.push('/');
    }

    const themeContext = useContext(TestContext);
    console.log(`themeContext → `,themeContext);
    console.log(`themeContext.theme → `,themeContext.theme);

    const handleClick = () => themeContext.onChangeTheme(themeContext.theme === 'light_!' ? 'dark_!' : 'light_!');

    return (
        <>
            <div className={s.wrap}>
                this is About Page component.
                <button className={s.backBtn} onClick={onClickHandler}>
                    ← Back to Home Page
                </button>
                <button className={s.backBtn} onClick={handleClick}>
                    Click to change theme
                </button>
            </div>
        </>
    );
};

export default AboutPage;