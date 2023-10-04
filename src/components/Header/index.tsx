import styles from "./header.module.scss"

const Header = () => {
	return (
		<>
			<div className={styles.header}>
				<h1 className={styles["header__title"]}>MAGIC</h1>
				<h3 className={styles["header__title__subtitle"]}>
					The Swedening
				</h3>
			</div>
			<div className={styles["header__paragraph"]}>
				{/* <p>
					Översätt Magic the Gathering-kort till svenska! Sök på
					kortnamn eller slumpa fram ett kort.
				</p> */}
			</div>
		</>
	)
}

export default Header
