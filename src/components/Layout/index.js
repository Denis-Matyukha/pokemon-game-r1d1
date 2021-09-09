import s from './style.module.css';
import cn from 'classnames';

const Layout = ({ title, descr, urlBg, colorBg }) => {
    
    let styleBg = {};

    if (urlBg) {
        styleBg = { backgroundImage: `url(${urlBg})` };
    } else if (colorBg) {
        styleBg = { background: `${colorBg}` };
    }

    return (
        <section className={s.root} style={styleBg}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>

                            {title && <h3>{title}</h3>}

                        <span className={s.separator}></span>
                    </div>

                    <div className={cn(s.desc, s.full)}>

                            {descr && <p>{descr}</p>}

                    </div>

                </article>
            </div>
        </section>
    );
};

export default Layout;