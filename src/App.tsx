import { useState } from "react"
import { ScryfallContext } from "./utils/contexts"
import { ScryfallType } from "./utils/types"

import Header from "./components/Header"
import Scryfall from "./components/Scryfall"
import TranslatedCard from "./components/TranslatedCard"
import Footer from "./components/Footer"

import "./App.scss"

function App() {
	const [scryfall, setScryfall] = useState<ScryfallType | null>(null)

	return (
		<>
			<ScryfallContext.Provider value={{ scryfall, setScryfall }}>
				<div className="container">
					<Header />
					<Scryfall />
					<TranslatedCard />
				</div>
				<Footer />
			</ScryfallContext.Provider>
		</>
	)
}

export default App
