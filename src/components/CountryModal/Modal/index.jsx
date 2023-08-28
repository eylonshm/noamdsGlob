import { motion } from "framer-motion";
import styles from "./index.module.scss";
import dropAnimation from "../dropAnimation";

const Modal = ({ handleClose }) => {
  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      className={styles.modal}
      variants={dropAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <img
        alt="x"
        src="/assets/x.svg"
        className={styles.exitButton}
        onClick={handleClose}
      />
      <h2 className={styles.title}>Country name</h2>
    </motion.div>
  );
};

export default Modal;
