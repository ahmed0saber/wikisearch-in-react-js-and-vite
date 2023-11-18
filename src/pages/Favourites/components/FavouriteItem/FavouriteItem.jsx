import { useEffect, useState } from "react"
import styles from "./favourite-item.module.css"
import RemovalAlert from "../RemovalAlert/RemovalAlert"
import { createPortal } from 'react-dom'

export default function FavouriteItem({ pageid, title, snippet, setFavouriteArticles }) {
    const [showRemovalAlert, setShowRemovalAlert] = useState(false)

    const removeFromFavourites = (id) => {
        setFavouriteArticles(prev => prev.filter(article => article.pageid !== id))
    }


    const handleRemoveBtnClick = () => {
        setShowRemovalAlert(true)
        document.body.classList.add("hide-overflow-y--removal-alert")
    }

    useEffect(() => {
        return () => {
            setShowRemovalAlert(false)
            document.body.classList.remove("hide-overflow-y--removal-alert")
        }
    }, [])

    return (
        <>
            <div className={styles.item}>
                <h2>{title}</h2>
                <div dangerouslySetInnerHTML={{ __html: snippet }}></div>
                <div className={styles.btns}>
                    <a href={`https://en.wikipedia.org/?curid=${pageid}`} target="_blank">Read More</a>
                    <button onClick={handleRemoveBtnClick}>Remove From Favourites</button>
                </div>
            </div>
            {showRemovalAlert ? (
                createPortal(
                    <RemovalAlert
                        heading={"Are you sure?"}
                        setShowRemovalAlert={setShowRemovalAlert}
                        removeFromFavourites={() => removeFromFavourites(pageid)}
                    />,
                    document.body
                )
            ) : null}
        </>
    )
}
