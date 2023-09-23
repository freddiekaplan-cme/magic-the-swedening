// import { useEffect } from "react"
import "./App.css"
import Scryfall from "./api/scryfall"
import TranslateText from "./components/TranslateText"

function App() {
	return (
		<>
			<Scryfall />
			<TranslateText />
		</>
	)
}

export default App
