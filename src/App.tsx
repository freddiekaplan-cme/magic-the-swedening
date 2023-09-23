// import { useEffect } from "react"
import "./App.css"
import Scryfall from "./api/scryfall"
// import TranslateText from "./components/TranslateText"

function App() {
	// Define your state variables here if needed

	// useEffect(() => {
	// Use the TranslateText function here
	// 	TranslateText("nimble", "sv")
	// 		.then((translatedText) => {
	// 			console.log(translatedText)
	// 		})
	// 		.catch((error) => {
	// 			console.error(error)
	// 		})
	// }, [])

	return (
		<>
			<Scryfall />
		</>
	)
}

export default App

// import "./App.css"
// import Scryfall from "./api/scryfall"
// import TranslateText from "./components/TranslateText"

// function App() {
// 	return (
// 		<>
// 			<Scryfall />
// 		</>
// 	)
// }

// export default App
