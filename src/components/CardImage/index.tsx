import { useContext, useState } from "react"
import { ScryfallContext } from "../../utils/contexts"
import { ScryfallContextType } from "../../utils/types"
import styles from "./cardImage.module.scss"

const CardImage = () => {
	const { scryfall } = useContext(ScryfallContext) as ScryfallContextType
	const [cardInfo, setCardInfo] = useState<boolean>(false)

	const toggleInfo = (): void => {
		setCardInfo(!cardInfo)
	}

	return (
		<div>
			{scryfall?.cardArt !== "" ? (
				<div className={styles["scryfall__card"]}>
					<img
						className={
							styles["scryfall__card--img"] +
							(cardInfo
								? ` ${styles["scryfall__card__opacity"]}`
								: "")
						}
						src={scryfall?.cardArt}
						alt={scryfall?.cardName}
						onClick={toggleInfo}
					/>
					<div
						onClick={toggleInfo}
						className={
							styles["scryfall__card__info"] +
							(!cardInfo
								? ` ${styles["scryfall__card__show-info"]}`
								: "")
						}
					>
						<div className={styles["scryfall__card__info__name"]}>
							{scryfall?.cardName}
						</div>
						<div className={styles["scryfall__card__info__type"]}>
							{scryfall?.cardType}
						</div>
						<div className={styles["scryfall__card__info__text"]}>
							{scryfall?.cardText}
						</div>
						<div className={styles["scryfall__card__info__flavor"]}>
							{scryfall?.cardFlavor || ""}
						</div>
					</div>
					<div className={styles["scryfall__card__text"]}>
						Klicka på bilden för att visa aktuell Oracle-info
					</div>
				</div>
			) : (
				<p>Loading image...</p>
			)}
		</div>
	)
}

export default CardImage
