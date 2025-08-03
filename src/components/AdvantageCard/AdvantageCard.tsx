import type { JSX } from "react";
import styles from './advantage-card.module.css';

type TAdvantageCard = {
  icon: JSX.Element,
  title: string,
  text: string
}

const AdvantageCard = ({icon, title, text}: TAdvantageCard) => {
  return (
    <li className={styles.card} data-testid='advantage-card'>
      <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        {icon}
      </svg>
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
    </li>
  )
}

export default AdvantageCard;