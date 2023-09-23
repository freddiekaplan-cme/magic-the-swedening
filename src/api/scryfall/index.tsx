import { useEffect, useState } from "react"

interface Scryfall {
	data: {
		name: string
		type_line: string
		oracle_text: string
		image_uris: {
			normal: string
		}
	}[]
}

const Scryfall = () => {
	const [data, setData] = useState<Scryfall | null>(null)
	const [name, setName] = useState<string | null>(null)
	const [type, setType] = useState<string | null>(null)
	const [text, setText] = useState<string | null>(null)
	const [img, setImg] = useState<string>("")
	const [searchValue, setSearchValue] = useState<string>("obsessive search")

	const apiFetch = async () => {
		try {
			const response = await fetch(
				"https://api.scryfall.com/cards/search?q=" + searchValue,
			)
			const jsonData = await response.json()
			setData(jsonData)

			if (jsonData) {
				setName(jsonData.data[0].name)
				setType(jsonData.data[0].type_line)
				setText(jsonData.data[0].oracle_text)
				setImg(jsonData.data[0].image_uris.normal)
			}
		} catch (error) {
			console.error("Error fetching data:", error)
		}
	}

	useEffect(() => {
		apiFetch()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const search = () => {
		apiFetch()
	}

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value)
	}

	return (
		<div>
			<div>
				<label htmlFor="searchInput">Search for a Magic card</label>
				<input
					type="text"
					id="searchInput"
					value={searchValue}
					onChange={handleInputChange}
				></input>
				<button onClick={search}>Search</button>
			</div>
			{data ? <div>Namn: {name}</div> : <p>Loading...</p>}
			{data ? <div>Typ: {type}</div> : <p>Loading...</p>}
			{data ? <div>Text: {text}</div> : <p>Loading...</p>}
			{data ? (
				<div>
					<img src={img} />
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	)
}

export default Scryfall
