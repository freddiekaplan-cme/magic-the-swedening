import styles from "./header.module.scss"

// import { useContext } from "react"
// import { ScryfallContext } from "../../utils/contexts"
// import { ScryfallContextType } from "../../utils/types"

const Header = () => {
	// const { scryfall } = useContext(ScryfallContext) as ScryfallContextType

	return (
		<>
			<div className={styles.header}>
				<h1>Magic The Swedening</h1>
			</div>
			<div className={styles["header__paragraph"]}>
				<p>Översätt ett Magic the Gathering-kort till svenska!</p>
			</div>
		</>
	)
}

export default Header
