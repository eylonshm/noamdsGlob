import countryRating from "../../mocks/countryRating";
import styles from "./index.module.scss";

const CountryModal = ({ onClose }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.modal}>Modal</div>
    </>
  );
};

export default CountryModal;
