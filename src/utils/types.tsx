export type ScryfallType = {
	cardName: string
	cardType: string | null
	cardText: string | null
	// cardImage: string | null
}

export type ScryfallContextType = {
	scryfall: ScryfallType | null
	setScryfall: (scryfall: ScryfallType | null) => void
}
