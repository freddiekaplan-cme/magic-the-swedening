import { createContext } from "react"
import { ScryfallContextType } from "./types"

export const ScryfallContext = createContext<ScryfallContextType | null>(null)
