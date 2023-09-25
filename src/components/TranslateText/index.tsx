import { useState, useEffect } from "react"
import translate from "translate"

interface TranslateTextProps {
	textToTranslate: string | null
}

const TranslateText: React.FC<TranslateTextProps> = (props) => {
	const [translatedText, setTranslatedText] = useState<string | null>(null)

	useEffect(() => {
		const translateText = async () => {
			try {
				if (props.textToTranslate) {
					const result: string = await translate(
						props.textToTranslate,
						{
							to: "sv",
						},
					)
					setTranslatedText(result)
				}
			} catch (error) {
				console.error("Error translating text:", error)
			}
		}

		if (props.textToTranslate) {
			translateText()
		}
	}, [props.textToTranslate])

	return (
		<>
			<span>
				{translatedText !== null && <span>{translatedText}</span>}
			</span>
		</>
	)
}

export default TranslateText
