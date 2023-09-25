import { useState } from "react"
import "./App.css"
import Scryfall from "./api/scryfall"
import TranslateText from "./components/TranslateText"

function App() {
	const [apiCardName, setApiCardName] = useState<string | null>(null)
	const [apiCardType, setApiCardType] = useState<string | null>(null)
	const [apiCardText, setApiCardText] = useState<string | null>(null)

	const handleCardName = (name: string | null) => {
		setApiCardName(name)
	}
	const handleCardType = (type: string | null) => {
		setApiCardType(type)
	}
	const handleCardText = (text: string | null) => {
		setApiCardText(text)
	}

	return (
		<div>
			<h1>Magic The Swedening</h1>
			<p>Översätt ett Magic the Gathering-kort till svenska!</p>
			<Scryfall
				cardName={handleCardName}
				cardType={handleCardType}
				cardText={handleCardText}
			/>
			{apiCardName && <h2>{apiCardName}</h2>}
			<div>
				{apiCardType && (
					<p>
						{/* Kortnamn:{" "} */}
						<TranslateText textToTranslate={apiCardName} />
					</p>
				)}
			</div>
			<div>
				{apiCardType && (
					<p>
						{/* Korttyp:  */}
						<TranslateText textToTranslate={apiCardType} />
					</p>
				)}
			</div>
			<div>
				{apiCardType && (
					<p>
						{/* Korttext:{" "} */}
						<TranslateText textToTranslate={apiCardText} />
					</p>
				)}
			</div>
		</div>
	)
}

export default App
