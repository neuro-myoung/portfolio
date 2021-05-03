import styles from '../styles/Indicator.module.css'

const Indicator = () => {
    return ( 
        <div className={styles.navMarker}>
            <div className={styles.mark}></div>
            <div className={styles.line}></div>
            <div className={styles.circle}></div>
            <div className={styles.line}></div>
            <div className={styles.circle}></div>
            <div className={styles.line}></div>
            <div className={styles.circle}></div>
            <div className={styles.line}></div>
            <div className={styles.circle}></div>
            <div className={styles.line}></div>
            <div className={styles.circle}></div>
        </div>
     );
}
 
export default Indicator;