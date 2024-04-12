export interface PokemonResponse {
    count: number
    next: string
    previous: string | null
    results: PokeItem[]
}

export interface PokeItem{
    name: string
    url: string
}