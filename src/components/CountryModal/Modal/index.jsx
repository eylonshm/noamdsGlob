import { motion } from 'framer-motion'
import styles from './index.module.scss'
import dropAnimation from '../dropAnimation'
import Category from './Category'
import { camelCaseToText } from '../../../utils'
import RatingBar from '../../RatingBar'
import copiesPrefix from '../../../copies.json'

const copies = copiesPrefix.countryModal

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

const renderTextCategory = (labal, data) => (
  <h3 className={styles.textCategory}>
    {`${labal}: `}
    <span className={styles.data}> {data}</span>
  </h3>
)

const renderExitButton = (handleClose) => (
  <img
    alt='x'
    src='/assets/x.svg'
    className={styles.exitButton}
    onClick={handleClose}
  />
)

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
      {renderExitButton(handleClose)}
      <div className={styles.title}>
        <h2>{data?.countryName}</h2>
        <RatingBar rating={data.overallRating} />
      </div>
      <div className={styles.content}>
        {renderTextCategory(
          copies.bestCityLabal,
          data.bestCityForDigitalNomads,
        )}
        {renderCategories()}
        {renderTextCategory(
          copies.nextCountriesLabal,
          data.nextCountriesToMoveTo.join(', '),
        )}
      </div>
    </motion.div>
  )
}

export default Modal
