import React, { useState } from "react"
import translate from "translate"

const TranslateText: React.FC = () => {
	const [textToTranslate, setTextToTranslate] = useState("nimble")
	const [translatedText, setTranslatedText] = useState<string | null>(null)

	const translateText = async () => {
		try {
			const result: string = await translate(textToTranslate, {
				to: "sv",
			})
			setTranslatedText(result)
		} catch (error) {
			console.error("Error translating text:", error)
		}
	}

	return (
		<div>
			<h1>Translation Example</h1>
			<div>
				<label htmlFor="textToTranslate">Text to Translate:</label>
				<input
					type="text"
					id="textToTranslate"
					value={textToTranslate}
					onChange={(e) => setTextToTranslate(e.target.value)}
				/>
			</div>
			<button onClick={translateText}>Translate</button>
			{translatedText !== null && (
				<div>
					<p>Translated Text:</p>
					<p>{translatedText}</p>
				</div>
			)}
		</div>
	)
}

export default TranslateText
