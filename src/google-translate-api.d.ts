declare module "google-translate-api" {
	interface TranslateResponse {
		text: string
		from: {
			language: {
				iso: string
			}
			text: {
				autoCorrected: boolean
				value: string
				didYouMean: boolean
			}
		}
	}

	interface TranslateOptions {
		from?: string
		to: string
	}

	function translate(
		text: string,
		options: TranslateOptions,
	): Promise<TranslateResponse>

	export default translate
}
