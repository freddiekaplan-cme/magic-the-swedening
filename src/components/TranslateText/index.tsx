import Translate from "google-translate-api"

// Define TranslateOptions directly
interface TranslateOptions {
	from?: string
	to: string
}

// Create a Translate component
export default async function TranslateText(
	text: string,
	targetLanguage: string,
): Promise<string> {
	const options: TranslateOptions = { to: targetLanguage }
	try {
		const res = await Translate(text, options)
		return res.text
	} catch (err) {
		console.error(err)
		throw err
	}
}
