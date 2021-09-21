import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import s from './style.module.css';
import { TestContext } from '../../App';

const AboutPage = ({ onChangePage }) => {
    const history = useHistory();
    const onClickHandler = () => {
        history.push('/');
    }

    const themeContext = useContext(TestContext);
    console.log(`themeContext → `,themeContext);

    return (
        <>
            <div className={s.wrap}>
                this is About Page component.
                <button className={s.backBtn} onClick={onClickHandler}>
                    ← Back to Home Page
                </button>
            </div>
        </>
    );
};

export default AboutPage;