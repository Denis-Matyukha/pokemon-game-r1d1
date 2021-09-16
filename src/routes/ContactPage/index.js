import { useHistory } from 'react-router-dom';
import s from './style.module.css';

const ContactPage = ({ onChangePage }) => {
    const history = useHistory();
    const onClickHandler = () => {
        history.push('/');
    }

    return (
        <>
            <div className={s.wrap}>
                this is Contact Page component.
                <button className={s.backBtn} onClick={onClickHandler}>
                    ← Back to Home Page
                </button>
            </div>
        </>
    );
};

export default ContactPage;