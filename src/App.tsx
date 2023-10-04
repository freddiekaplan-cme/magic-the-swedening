import { useState, useRef } from "react"
import { ScryfallContext } from "./utils/contexts"
import { ScryfallType } from "./utils/types"

import Header from "./components/Header"
import Scryfall from "./components/Scryfall"
import CardImage from "./components/CardImage"
import TranslatedCard from "./components/TranslatedCard"
import Footer from "./components/Footer"

import Lottie, { LottieRefCurrentProps } from "lottie-react"
import animationData from "../src/assets/animations/animation_lnbgup3z.json"

import "./App.scss"

function App() {
	const [scryfall, setScryfall] = useState<ScryfallType | null>(null)

	const animationRef = useRef<LottieRefCurrentProps>(null)
	const [showAnimation, setShowAnimation] = useState<boolean>(true)

	const setShowAnimationTrue = () => {
		setShowAnimation(true)
		setTimeout(() => {
			setShowAnimation(false)
		}, 1500)
	}

	return (
		<>
			<ScryfallContext.Provider value={{ scryfall, setScryfall }}>
				<Header />
				<div className="container">
					<Scryfall setShowAnimationTrue={setShowAnimationTrue} />
				</div>
				<Lottie
					loop={true}
					lottieRef={animationRef}
					animationData={animationData}
					className={`animation${
						!showAnimation ? " animation__hidden" : " flex"
					}`}
				/>

				<div
					className={`cards${showAnimation ? " cards__hidden" : ""}`}
				>
					<TranslatedCard />
					<CardImage />
				</div>

				<Footer />
			</ScryfallContext.Provider>
		</>
	)
}

export default App
