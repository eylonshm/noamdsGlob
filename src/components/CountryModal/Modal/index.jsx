import { motion } from 'framer-motion'
import styles from './index.module.scss'
import dropAnimation from '../dropAnimation'
import Category from './Category'
import { camelCaseToText } from '../../../utils'
import RatingBar from '../../RatingBar'

const categories = [
  'language',
  'costOfLiving',
  'internet',
  'weather',
  'safety',
  'foodSafety',
  'hospitals',
  'incomeLevel',
  'fun',
  'nightLife',
  'peaceAndConflicts',
]

const Modal = ({ handleClose, data }) => {
  const renderCategories = () =>
    categories.map((category) => (
      <Category
        key={category}
        name={camelCaseToText(category)}
        rating={data[`${category}Rating`]}
        description={data[`${category}Description`]}
      />
    ))

  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      className={styles.modal}
      variants={dropAnimation}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <img
        alt='x'
        src='/assets/x.svg'
        className={styles.exitButton}
        onClick={handleClose}
      />
      <div className={styles.title}>
        <h2>{data?.countryName}</h2>
        <RatingBar rating={data.overallRating} />
      </div>
      <div className={styles.content}>{renderCategories()}</div>
    </motion.div>
  )
}

export default Modal
