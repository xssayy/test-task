import Modal from "react-modal";
Modal.setAppElement("#root");
import clsx from "clsx";
import style from "./BurgerMenu.module.css";
import closeImg from "../../public/images/icons/iconX.png";
import { NavLink, useLocation } from "react-router-dom";

const buildLinkClass = (to, currentPath) => {
  const isActive = currentPath === to;
  return clsx(style.link, isActive && style.active);
};

const BurgerMenu = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const currentPath = location.hash;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      className={style.burger}
      overlayClassName={style.overlay}
    >
      <button className={style.closeBtn} onClick={() => setIsOpen(false)}>
        <img src={closeImg} width="40" height="32" />
      </button>
      <nav className={style.nav}>
        <NavLink
          to="#main"
          className={buildLinkClass("#main", currentPath)}
          onClick={() => setIsOpen(false)}
        >
          головна
        </NavLink>

        <NavLink
          to="#speekears"
          className={buildLinkClass("#speekears", currentPath)}
          onClick={() => setIsOpen(false)}
        >
          спікери
        </NavLink>
        <NavLink
          to="#tariffs"
          className={buildLinkClass("#tariffs", currentPath)}
          onClick={() => setIsOpen(false)}
        >
          тарифи
        </NavLink>
        <NavLink
          to="#conferences"
          className={buildLinkClass("#conferences", currentPath)}
          onClick={() => setIsOpen(false)}
        >
          конференції
        </NavLink>
        <NavLink
          to="#subcriptions"
          className={buildLinkClass("#subcriptions", currentPath)}
          onClick={() => setIsOpen(false)}
        >
          абонементи
        </NavLink>
        <NavLink
          to="#dontation"
          className={buildLinkClass("#dontation", currentPath)}
          onClick={() => setIsOpen(false)}
        >
          донат
        </NavLink>
        <NavLink
          to="#contacts"
          className={buildLinkClass("#contacts", currentPath)}
          onClick={() => setIsOpen(false)}
        >
          контакти
        </NavLink>
      </nav>
    </Modal>
  );
};

export default BurgerMenu;
