import { useState } from "react"
import { ScryfallContext } from "./utils/contexts"
import { ScryfallType } from "./utils/types"

import Scryfall from "./components/Scryfall"
import TranslateText from "./components/TranslateText"
import Header from "./components/Header"
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
					{scryfall && (
						<div className="translation-container">
							<div
								className={`translation translation__color--${scryfall.cardColor}`}
							>
								<div className="translation__background">
									<div className="translation__name">
										<TranslateText
											textToTranslate={scryfall.cardName}
										/>
									</div>
								</div>
								<div>
									<img
										className="translation__art-crop"
										src={scryfall.cardCrop}
									/>
								</div>
								<div className="translation__background">
									<div className="translation__type">
										<TranslateText
											textToTranslate={scryfall.cardType}
										/>
									</div>
								</div>
								<div className="translation__background translation__text__background">
									<div className="translation__text">
										<TranslateText
											textToTranslate={scryfall.cardText}
										/>
									</div>
									{scryfall.cardFlavor !== "" && (
										<div className="translation__flavor">
											<hr className="translation__line"></hr>
											<TranslateText
												textToTranslate={
													scryfall.cardFlavor
												}
											/>
										</div>
									)}
								</div>
							</div>
						</div>
					)}
				</div>
				<Footer />
			</ScryfallContext.Provider>
		</>
	)
}

export default App
