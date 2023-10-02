import { useContext } from "react"
import { ScryfallContext } from "../../utils/contexts"
import { ScryfallContextType } from "../../utils/types"
import styles from "./translatedCard.module.scss"
import TranslateText from "../TranslateText"

const TranslatedCard = () => {
	const { scryfall } = useContext(ScryfallContext) as ScryfallContextType

	return (
		<>
			{scryfall && (
				<div className={styles["translation-container"]}>
					<div
						className={`${styles.translation} ${
							styles["translation__color--" + scryfall.cardColor]
						}`}
					>
						<div className={styles["translation__background"]}>
							<div className={styles["translation__name"]}>
								<TranslateText
									textToTranslate={scryfall.cardName}
								/>
							</div>
						</div>
						<div>
							<img
								className={styles["translation__art-crop"]}
								src={scryfall.cardCrop}
							/>
						</div>
						<div className={styles["translation__background"]}>
							<div className={styles["translation__type"]}>
								<TranslateText
									textToTranslate={scryfall.cardType}
								/>
							</div>
						</div>
						<div
							className={`${styles.translation__background} ${styles["translation__text__background"]}`}
						>
							<div className={styles["translation__text"]}>
								<TranslateText
									textToTranslate={scryfall.cardText}
								/>
							</div>
							{scryfall.cardFlavor !== "" && (
								<div className={styles["translation__flavor"]}>
									<hr
										className={styles["translation__line"]}
									></hr>
									<TranslateText
										textToTranslate={scryfall.cardFlavor}
									/>
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default TranslatedCard
