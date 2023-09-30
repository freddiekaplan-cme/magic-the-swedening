import { useEffect, useState, useContext } from "react"
import styles from "./scryfall.module.scss"

import { ScryfallContextType } from "../../utils/types"
import { ScryfallContext } from "../../utils/contexts"

interface CardData {
	name: string
	type_line: string
	oracle_text: string
	image_uris: {
		normal: string | undefined
		// art_crop: string | undefined
	}
	card_faces: {
		image_uris: {
			normal: string | undefined
		}
	}[]
}

const Scryfall = () => {
	const { scryfall, setScryfall } = useContext(
		ScryfallContext,
	) as ScryfallContextType

	const [img, setImg] = useState<string | undefined>("")
	const [cardInfo, setCardInfo] = useState<boolean>(false)
	const [searchValue, setSearchValue] = useState<string>("")

	const getRandomCard = async () => {
		try {
			const response = await fetch(
				"https://api.scryfall.com/cards/random",
			)
			const cardData = await response.json()

			if (cardData && cardData.name) {
				const cardName = cardData.name
				const cardType = cardData.type_line
				const cardText = cardData.oracle_text

				setScryfall({ cardName, cardType, cardText })

				if (
					cardData.image_uris &&
					cardData.image_uris.normal !== undefined
				) {
					setImg(cardData.image_uris.normal)
				} else if (
					cardData.card_faces &&
					cardData.card_faces[0].image_uris &&
					cardData.card_faces[0].image_uris.normal !== undefined
				) {
					setImg(cardData.card_faces[0].image_uris.normal)
				} else {
					setImg("")
				}
			}
		} catch (error) {
			console.error("Error fetching data:", error)
		}
	}

	useEffect(() => {
		getRandomCard()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const searchForCard = async () => {
		try {
			const response = await fetch(
				"https://api.scryfall.com/cards/search?q=" + searchValue,
			)
			const jsonData = await response.json()

			if (jsonData && jsonData.data && jsonData.data.length > 0) {
				const cardData: CardData = jsonData.data[0]
				const cardName = cardData.name
				const cardType = cardData.type_line
				const cardText = cardData.oracle_text
				// const cardCrop = cardData.image_uris.art_crop

				setScryfall({ cardName, cardType, cardText })

				if (
					cardData.image_uris &&
					cardData.image_uris.normal !== undefined
				) {
					setImg(cardData.image_uris.normal)
				} else if (
					cardData.card_faces &&
					cardData.card_faces[0].image_uris &&
					cardData.card_faces[0].image_uris.normal !== undefined
				) {
					setImg(cardData.card_faces[0].image_uris.normal)
				} else {
					setImg("")
				}
			}
		} catch (error) {
			console.error("Error fetching data:", error)
		}
	}

	const search = () => {
		if (searchValue) {
			searchForCard()
		}
	}

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value)
	}

	const toggleInfo = (): void => {
		setCardInfo(!cardInfo)
	}

	return (
		<div className={styles.scryfall}>
			<div className={styles.input_container}>
				<div className={styles.input}>
					{/* <label htmlFor="searchInput">Kortnamn: </label> */}
					<div className={styles["input__search"]}>
						<input
							className={styles["input__field"]}
							type="text"
							id="searchInput"
							value={searchValue}
							onChange={handleInputChange}
						></input>
						<button
							className={styles["input__button"]}
							onClick={search}
						>
							Sök
						</button>
					</div>
					<div className={styles["input__random"]}>
						<button
							className={styles["input__button"]}
							onClick={getRandomCard}
						>
							Slumpa kort
						</button>
					</div>
				</div>
			</div>

			<div>
				{img !== "" ? (
					<div className={styles["scryfall__card"]}>
						<img
							className={
								styles["scryfall__card--img"] +
								(cardInfo
									? ` ${styles["scryfall__card__opacity"]}`
									: "")
							}
							src={img}
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
							<div
								className={styles["scryfall__card__info__name"]}
							>
								{scryfall?.cardName}
							</div>
							<div
								className={styles["scryfall__card__info__type"]}
							>
								{scryfall?.cardType}
							</div>
							<div
								className={styles["scryfall__card__info__text"]}
							>
								{scryfall?.cardText}
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
		</div>
	)
}

export default Scryfall
