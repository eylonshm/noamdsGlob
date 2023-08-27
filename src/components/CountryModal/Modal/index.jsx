import { motion } from 'framer-motion'
import styles from './index.module.scss'
import dropAnimation from '../dropAnimation'

const Modal = ({ handleClose }) => {
  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      className={styles.modal}
      variants={dropAnimation}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <img src='/assets/x.svg' className={styles.exitButton} />
      <p>Modal</p>
      <button onClick={handleClose}>Close</button>
    </motion.div>
  )
}

export default Modal
