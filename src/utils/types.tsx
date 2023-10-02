export type ScryfallType = {
	cardName: string
	cardArt: string
	cardType: string | null
	cardText: string | null
	cardFlavor: string | null
	cardCrop: string | undefined
	cardColor: string
	cardSet: string
	cardArtist: string
}

export type ScryfallContextType = {
	scryfall: ScryfallType | null
	setScryfall: (scryfall: ScryfallType | null) => void
}
