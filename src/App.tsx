import { useState } from "react"
import "./App.css"
import Scryfall from "./api/scryfall"
import TranslateText from "./components/TranslateText"

function App() {
	const [receivedName, setReceivedName] = useState<string | null>(null)

	const handleNameReceived = (name: string | null) => {
		setReceivedName(name)
	}

	return (
		<div>
			<div>{receivedName && <p>Received Name: {receivedName}</p>}</div>

			<Scryfall cardName={handleNameReceived} />

			<TranslateText />
		</div>
	)
}

export default App
