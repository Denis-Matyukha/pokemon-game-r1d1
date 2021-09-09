import s from './style.module.css';
import cn from 'classnames';

const Layout = ({ title, descr, urlBg, colorBg }) => {
    return (
        <section className={s.root}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>
                            {title}
                        </h3>
                        <span className={s.separator}></span>
                    </div>

                    <div className={cn('desc', 'full')}>
                        <p>
                            {descr}
                        </p>
                    </div>

                </article>
            </div>
        </section>
    );
};

export default Layout;