import styles from './index.module.scss'

const COLORS = {
  green: '#2BDE73',
  yellow: '#FFC924',
  red: '#FF4742',
}

const backgroundColor = (rating) => {
  if (rating > 6.5) return COLORS.green
  if (rating > 3.2) return COLORS.yellow
  return COLORS.red
}

const RatingBar = ({ rating }) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.colored}
        style={{
          backgroundColor: backgroundColor(rating),
          width: `${rating * 10}%`,
        }}
      >
        {rating}
      </div>
    </div>
  )
}

export default RatingBar
