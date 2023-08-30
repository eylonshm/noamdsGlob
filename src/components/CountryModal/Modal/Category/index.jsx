import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from "./index.module.scss";

const descriptionAnimatoin = {
  initial: {
    y: -15,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    x: 500,
    opacity: 0,
  },
  transition: {
    type: "spring",
    bounce: 0.7,
    opacity: {
      animate: {
        delay: 0.2,
      },
    },
  },
};

const Category = ({ name, rating, description }) => {
  const [open, setOpen] = useState(false);

  const triggerDescription = () => {
    setOpen((open) => !open);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title} onClick={triggerDescription}>
        <img
          alt=">"
          className={styles.arrow}
          src="/assets/arrowRight.svg"
        ></img>
        <h3 className={styles.name}>{name}</h3>
      </div>
      <AnimatePresence>
        {open && (
          <motion.p className={styles.description} {...descriptionAnimatoin}>
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Category;
