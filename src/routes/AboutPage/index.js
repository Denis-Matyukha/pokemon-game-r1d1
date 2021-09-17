import { useHistory } from 'react-router-dom';
import s from './style.module.css';

const AboutPage = ({ onChangePage }) => {
    const history = useHistory();
    const onClickHandler = () => {
        history.push('/');
    }

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