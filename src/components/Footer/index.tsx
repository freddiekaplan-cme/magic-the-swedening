import { useContext } from "react"
import { ScryfallContext } from "../../utils/contexts"
import { ScryfallContextType } from "../../utils/types"
import styles from "./footer.module.scss"

const Footer = () => {
	const { scryfall } = useContext(ScryfallContext) as ScryfallContextType

	return (
		<>
			<div className={styles["footer"]}>
				<div className={styles["footer__container"]}>
					<div className={styles["footer__column"]}>
						<h4>Scryfall-info</h4>
						<div>
							<a
								href={`https://scryfall.com/search?q=${scryfall?.cardName}`}
							>
								{scryfall?.cardName}
							</a>
						</div>
						<div>
							<a
								href={`https://scryfall.com/search?q=set:${scryfall?.cardSet}`}
							>
								{scryfall?.cardSet}
							</a>
						</div>
						<div>
							<a
								href={`https://scryfall.com/search?q=artist:"${scryfall?.cardArtist}"`}
							>
								{scryfall?.cardArtist} 🖌️
							</a>
						</div>
					</div>
					<div className={styles["footer__column"]}>
						<h4>© 2023 Freddie Kaplan</h4>
						<div>
							<a href="https://github.com/freddiekaplan-cme">
								Min GitHub
							</a>
						</div>
						<div>
							<a href="https://ko-fi.com/freddiekaplan">
								Bjud mig på en kaffe
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer
