import Modal from "react-modal";
Modal.setAppElement("#root");
import style from "./ModalWindow.module.css";
import redSpiral from "../../public/images/ModalWindowImages/redspiral.png";

const ModalWindow = ({ isOpen, setIsOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      className={style.modal}
      overlayClassName={style.overlay}
    >
      <p className={style.bold}>Дякуємо, ваша оплата прошла успішно!</p>
      <p className={style.emailP}>
        Очікуйте детальну інформацію на своїй{" "}
        <span className={style.emailSpan}>електронній пошті</span>
      </p>
      <img
        src={redSpiral}
        className={style.redSpiralImg}
        alt="Red Spiral Image"
        width="205"
        height="205"
      />
      <p className={style.questionP}>
        Якщо у вас залишились додаткові питання, зверніться до нас на пряму
      </p>
      <p className={(style.bold, style.parting)}>До зустрічі!</p>
      <div className={style.buttonsContainer}>
        <button className={style.thankYouBtn} onClick={() => setIsOpen(false)}>
          Дякую
        </button>
        <button className={style.additionalQuestionBtn}>
          Додаткові питання
        </button>
      </div>
    </Modal>
  );
};

export default ModalWindow;
