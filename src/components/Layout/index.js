import s from './style.module.css';
import cn from 'classnames';

const Layout = ({ title, descr, urlBg, colorBg }) => {
    return (
        <section className={s.root}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>
                            {title && <p>Title should be here...</p>}
                        </h3>
                        <span className={s.separator}></span>
                    </div>

                    <div className={cn(s.desc, s.full)}>
                        <p>
                            {descr && <p>Description should be here...</p>}
                        </p>
                    </div>

                </article>
            </div>
        </section>
    );
};

export default Layout;