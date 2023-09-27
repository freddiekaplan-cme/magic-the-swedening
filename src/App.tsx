import { useState } from "react"
import { ScryfallContext } from "./utils/contexts"
import { ScryfallType } from "./utils/types"

import Scryfall from "./components/Scryfall"
import TranslateText from "./components/TranslateText"
import Header from "./components/Header"

import "./App.scss"

function App() {
	const [scryfall, setScryfall] = useState<ScryfallType | null>(null)

	return (
		<>
			<ScryfallContext.Provider value={{ scryfall, setScryfall }}>
				<div className="container">
					<Header />
					<Scryfall />

					{scryfall && (
						<div>
							<p>
								<TranslateText
									textToTranslate={scryfall.cardName}
								/>
							</p>
							<p>
								<TranslateText
									textToTranslate={scryfall.cardType}
								/>
							</p>
							<p>
								<TranslateText
									textToTranslate={scryfall.cardText}
								/>
							</p>
						</div>
					)}
				</div>
			</ScryfallContext.Provider>
		</>
	)
}

export default App
