import s from './style.module.css';
import cn from 'classnames';

const Layout = ({ id, title, urlBg, colorBg, children }) => {

    let styleOfSection = {};

    if (urlBg) {
        styleOfSection.backgroundImage = `url(${urlBg})`;
    }

    if (colorBg) {
        styleOfSection.backgroundColor = colorBg;
    }

    return (
        <section
            className={s.root}
            style={styleOfSection}
            id={id}
        >
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>

                        {title && <h3>{title}</h3>}

                        <span className={s.separator}></span>
                    </div>

                    <div className={cn(s.desc, s.full)}>

                        {children}

                    </div>

                </article>
            </div>
        </section>
    );
};

export default Layout;