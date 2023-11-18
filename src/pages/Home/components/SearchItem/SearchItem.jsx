import styles from "./search-item.module.css"

export default function SearchItem({ pageid, title, snippet, isFavourite, setFavouriteArticles }) {
    const addToFavourites = () => {
        setFavouriteArticles(prev => [...prev, { pageid, title, snippet }])
    }

    const removeFromFavourites = () => {
        setFavouriteArticles(prev => prev.filter(article => article.pageid !== pageid))
    }

    return (
        <div className={styles.item}>
            <h2>{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: snippet }}></div>
            <div className={styles.btns}>
                <a href={`https://en.wikipedia.org/?curid=${pageid}`} target="_blank">Read More</a>
                {
                    isFavourite ? <button onClick={removeFromFavourites}>Remove From Favourites</button>
                    : <button onClick={addToFavourites}>Add To Favourites</button>
                }
            </div>
        </div>
    )
}
