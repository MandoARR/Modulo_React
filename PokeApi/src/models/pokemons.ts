export interface PokemonResponse {
    count: number
    next: string
    previous: string | null
    results: PokeItem[]
}

export interface PokeItem {
    name: string
    url: string
}

export interface PokeInfo {
    id: number
    abilities: Ability[]
    location_area_encounters: string
    name: string
}

export interface Ability {
    ability: Ability2
}

export interface Ability2 {
    name: string
    url: string
}