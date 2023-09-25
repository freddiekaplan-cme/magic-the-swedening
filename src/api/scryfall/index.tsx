import { useEffect, useState } from "react"
import "../../App.css"

interface NameProp {
	cardName: (name: string | null) => void
	cardType: (name: string | null) => void
	cardText: (name: string | null) => void
}

interface CardData {
	name: string
	type_line: string
	oracle_text: string
	image_uris: {
		normal: string | undefined
	}
	card_faces: {
		image_uris: {
			normal: string | undefined
		}
	}[]
}

const Scryfall = ({ cardName, cardType, cardText }: NameProp) => {
	const [img, setImg] = useState<string | undefined>("")
	const [searchValue, setSearchValue] = useState<string>("")

	const getRandomCard = async () => {
		try {
			const response = await fetch(
				"https://api.scryfall.com/cards/random",
			)
			const jsonData = await response.json()

			if (jsonData && jsonData.name) {
				const randomName = jsonData.name
				setSearchValue(randomName)
				cardName(randomName)
				cardType(jsonData.type_line)
				cardText(jsonData.oracle_text)

				if (
					jsonData.image_uris &&
					jsonData.image_uris.normal !== undefined
				) {
					setImg(jsonData.image_uris.normal)
				} else if (
					jsonData.card_faces &&
					jsonData.card_faces[0].image_uris &&
					jsonData.card_faces[0].image_uris.normal !== undefined
				) {
					setImg(jsonData.card_faces[0].image_uris.normal)
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
				cardName(cardData.name)
				cardType(cardData.type_line)
				cardText(cardData.oracle_text)

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

	return (
		<div>
			<div>
				<label htmlFor="searchInput">Kortnamn: </label>
				<input
					type="text"
					id="searchInput"
					value={searchValue}
					onChange={handleInputChange}
				></input>
				<button onClick={search}>Sök</button>
				<p>
					<button onClick={getRandomCard}>Slumpa kort</button>
				</p>
			</div>

			<div>
				{img !== "" ? (
					<div>
						<img className="image" src={img} alt="Card" />
					</div>
				) : (
					<p>Loading image...</p>
				)}
			</div>
		</div>
	)
}

export default Scryfall
