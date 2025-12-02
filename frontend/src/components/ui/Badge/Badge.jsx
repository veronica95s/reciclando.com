import styles from './Badge.module.css';

const Badge = (props) => {
  return <span className={`${styles['bg-badge']} ${styles.badge} badge`}>{props.value}</span>;
};

export default Badge;
