import { NavLink, useLocation } from "react-router-dom";
import style from "./UalPage.module.css";
import iconUAL from "../../public/images/UAL/iconUAL.png";
import handImg from "../../public/images/UAL/hand.png";
import clsx from "clsx";
const buildLinkClass = (to, currentPath) => {
  const isActive = currentPath === to;
  return clsx(style.secondNavLink, isActive && style.active);
};
const UalPage = () => {
  const location = useLocation();
  const currentPath = location.hash;
  return (
    <section className={style.section}>
      <header>
        <NavLink to="/ual">
          <img
            src={iconUAL}
            className={style.icon}
            alt="University of the Arts London"
          />
        </NavLink>
        <div className={style.navContainer}>
          <nav className={style.nav}>
            <NavLink to="subjects" className={style.link}>
              Subjects
            </NavLink>
            <NavLink to="courses" className={style.link}>
              Courses
            </NavLink>
            <NavLink to="colleges" className={style.link}>
              Colleges and Institutes
            </NavLink>
          </nav>
          <button className={style.loginBtn}>Login</button>
        </div>
      </header>
      <main className={style.main}>
        <div className={style.infoContainer}>
          <h1 className={style.title}>University of the Arts London</h1>
          <p className={style.description}>
            We are 1 university, made up of 6 Colleges and 19,000+ students from
            everywhere. And we are top 2 in the world for Art and Design (QS
            World University Rankings 2023).
          </p>
          <button className={style.joinBtn}>Come and join</button>
        </div>
        <div className={style.secondNavContainer}>
          <ul className={style.secondNavList}>
            <li className={style.secondNavLi}>
              <NavLink
                to="#survey"
                className={buildLinkClass("#survey", currentPath)}
              >
                Survey Season 2024
              </NavLink>
            </li>
            <li className={style.secondNavLi}>
              <NavLink
                to="#undergraduate"
                className={buildLinkClass("#undergraduate", currentPath)}
              >
                Undergraduate study
              </NavLink>
            </li>
            <li className={style.secondNavLi}>
              <NavLink
                to="#postgraduate"
                className={buildLinkClass("#postgraduate", currentPath)}
              >
                Postgraduate study
              </NavLink>
            </li>
            <li className={style.secondNavLi}>
              <NavLink
                to="#prospectus"
                className={buildLinkClass("#prospectus", currentPath)}
              >
                Our prospectus
              </NavLink>
            </li>
            <li className={style.secondNavLi}>
              <NavLink
                to="#events"
                className={buildLinkClass("#events", currentPath)}
              >
                Discovery webinars and open events
              </NavLink>
            </li>
            <li className={style.secondNavLi}>
              <NavLink
                to="#showcase"
                className={buildLinkClass("#showcase", currentPath)}
              >
                UAL Showcase
              </NavLink>
            </li>
          </ul>
        </div>
      </main>
      <div className={style.backgroundImage}>
        <img src={handImg} alt="" />
      </div>
    </section>
  );
};

export default UalPage;
