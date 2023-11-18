import styles from "./search-input.module.css"

export default function SearchInput({ searchQuery, setSearchQuery }) {
    return (
        <input
            className={styles.input}
            type="text"
            placeholder="Type anything to search.."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
    )
}
