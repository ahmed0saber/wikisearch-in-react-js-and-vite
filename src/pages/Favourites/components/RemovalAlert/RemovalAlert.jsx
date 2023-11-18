import { useEffect } from 'react'
import styles from './removal-alert.module.css'

export default function RemovalAlert({ heading, setShowRemovalAlert, removeFromFavourites }) {
    const handleConfirmBtnClick = () => {
        removeFromFavourites()
        closeAlert()
    }

    const closeAlert = () => {
        setShowRemovalAlert(false)
        document.body.classList.remove("hide-overflow-y--removal-alert")
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.alert}>
                <h3>{heading}</h3>
                <div className={styles.btns}>
                    <button onClick={handleConfirmBtnClick}>yes, remove</button>
                    <button onClick={closeAlert}>no, cancel</button>
                </div>
            </div>
        </div>
    )
}
