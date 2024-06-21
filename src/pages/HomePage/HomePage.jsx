import { useState } from "react";
import { NavLink } from "react-router-dom";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";

const HomePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <button onClick={() => setBurgerIsOpen(true)}>Open Burger</button>
      <NavLink to="/ual">University of the Arts London</NavLink>
      {modalIsOpen && (
        <ModalWindow isOpen={modalIsOpen} setIsOpen={setModalIsOpen} />
      )}
      {burgerIsOpen && (
        <BurgerMenu isOpen={burgerIsOpen} setIsOpen={setBurgerIsOpen} />
      )}
    </div>
  );
};

export default HomePage;
