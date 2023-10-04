/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect, useState, useContext } from "react"
import styles from "./scryfall.module.scss"

import { ScryfallContextType } from "../../utils/types"
import { ScryfallContext } from "../../utils/contexts"

interface ScryfallProps {
	setShowAnimationTrue: () => void
}

interface CardData {
	name: string
	type_line: string
	oracle_text: string
	flavor_text: string
	colors: string
	set_name: string
	artist: string
	image_uris: {
		normal: string | undefined
		art_crop: string
	}
	card_faces: {
		image_uris: {
			normal: string | undefined
			art_crop: string
		}
	}[]
}

const Scryfall: React.FC<ScryfallProps> = ({ setShowAnimationTrue }) => {
	const { setScryfall } = useContext(ScryfallContext) as ScryfallContextType
	const [searchValue, setSearchValue] = useState<string>("")

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
		if (e.key === "Enter") {
			search()
		}
	}

	const getRandomCard = async () => {
		try {
			const response = await fetch(
				"https://api.scryfall.com/cards/random",
			)
			const cardData = await response.json()

			if (cardData) {
				const cardName = cardData.name
				const cardType = cardData.type_line
				const cardText = cardData.oracle_text
				const cardCrop = cardData.image_uris.art_crop
				const cardFlavor = cardData.flavor_text || ""
				const cardSet = cardData.set_name
				const cardArtist = cardData.artist

				const cardArt =
					cardData.image_uris &&
					cardData.image_uris.normal !== undefined
						? cardData.image_uris.normal
						: cardData.card_faces &&
						  cardData.card_faces[0].image_uris &&
						  cardData.card_faces[0].image_uris.normal !== undefined
						? cardData.card_faces[0].image_uris.normal
						: ""

				const cardColor =
					cardData.colors[0] === undefined
						? "colorless"
						: cardData.colors.length > 1
						? "multicolor"
						: cardData.colors[0]

				setScryfall({
					cardName,
					cardType,
					cardText,
					cardCrop,
					cardFlavor,
					cardArt,
					cardColor,
					cardSet,
					cardArtist,
				})

				setShowAnimationTrue()
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
				const cardFlavor = cardData.flavor_text || ""
				const cardCrop = cardData.image_uris.art_crop
				const cardSet = cardData.set_name
				const cardArtist = cardData.artist

				const cardArt =
					cardData.image_uris &&
					cardData.image_uris.normal !== undefined
						? cardData.image_uris.normal
						: cardData.card_faces &&
						  cardData.card_faces[0].image_uris &&
						  cardData.card_faces[0].image_uris.normal !== undefined
						? cardData.card_faces[0].image_uris.normal
						: ""

				const cardColor =
					cardData.colors[0] === undefined
						? "colorless"
						: cardData.colors.length > 1
						? "multicolor"
						: cardData.colors[0]

				setScryfall({
					cardName,
					cardArt,
					cardType,
					cardText,
					cardCrop,
					cardFlavor,
					cardColor,
					cardSet,
					cardArtist,
				})

				setShowAnimationTrue()
			}
		} catch (error) {
			console.error("Error fetching data:", error)
		}
	}

	const search = () => {
		if (searchValue) {
			searchForCard()
			setSearchValue("")
		}
	}

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value)
	}

	return (
		<div className={styles.scryfall}>
			<div className={styles.input_container}>
				<p>
					Översätt Magic the Gathering-kort till svenska! Sök på
					kortnamn eller slumpa fram ett kort.
				</p>
				<div className={styles.input}>
					<div className={styles["input__search"]}>
						<input
							className={styles["input__field"]}
							type="text"
							id="searchInput"
							value={searchValue}
							onChange={handleInputChange}
							onKeyDown={handleKeyDown}
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
		</div>
	)
}

export default Scryfall
