import { useEffect, useState } from "react"

interface ApiResponse {
	data: {
		name: string
	}[]
}

const Scryfall = () => {
	const [data, setData] = useState<ApiResponse | null>(null)
	const [searchValue, setSearchValue] = useState("ragavan nimble")

	const apiFunction = async () => {
		try {
			const response = await fetch(
				"https://api.scryfall.com/cards/search?q=" + searchValue,
			)
			const jsonData = await response.json()
			setData(jsonData)
		} catch (error) {
			console.error("Error fetching data:", error)
		}
	}

	useEffect(() => {
		apiFunction()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const search = () => {
		apiFunction()
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
			{data ? <div>Namn: {data.data[0].name}</div> : <p>Loading...</p>}
		</div>
	)
}

export default Scryfall
