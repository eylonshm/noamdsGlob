import { motion } from "framer-motion";
import styles from "./index.module.scss";
import dropAnimation from "../dropAnimation";
import Category from "./Category";

const Modal = ({ handleClose, data }) => {
  console.log(data);
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
      <h2 className={styles.title}>{data?.countryName}</h2>
      <div className={styles.content}>
        <Category
          name={"Overall"}
          description={
            "desc djsakldj sakjd ahsikdj sahidusaj hdisau dhsaiud sahidus ahdiasu dhasiud hsaidu ashdiusa hdsaiud hsaidu ahi"
          }
          rating={8.2}
        />
        <Category
          name={"Overall"}
          description={
            "desc djsakldj sakjd ahsikdj sahidusaj hdisau dhsaiud sahidus ahdiasu dhasiud hsaidu ashdiusa hdsaiud hsaidu ahi"
          }
          rating={8.2}
        />
        <Category
          name={"Overall"}
          description={
            "desc djsakldj sakjd ahsikdj sahidusaj hdisau dhsaiud sahidus ahdiasu dhasiud hsaidu ashdiusa hdsaiud hsaidu ahi"
          }
          rating={8.2}
        />
        <Category
          name={"Overall"}
          description={
            "desc djsakldj sakjd ahsikdj sahidusaj hdisau dhsaiud sahidus ahdiasu dhasiud hsaidu ashdiusa hdsaiud hsaidu ahi"
          }
          rating={8.2}
        />
        <Category
          name={"Overall"}
          description={
            "desc djsakldj sakjd ahsikdj sahidusaj hdisau dhsaiud sahidus ahdiasu dhasiud hsaidu ashdiusa hdsaiud hsaidu ahi"
          }
          rating={8.2}
        />
        <Category
          name={"Overall"}
          description={
            "desc djsakldj sakjd ahsikdj sahidusaj hdisau dhsaiud sahidus ahdiasu dhasiud hsaidu ashdiusa hdsaiud hsaidu ahi"
          }
          rating={8.2}
        />
      </div>
    </motion.div>
  );
};

export default Modal;
