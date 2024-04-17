export interface Response_sw {
    info: Info
    data: SpeciesItem[]
}

export interface Info {
    total: number
    page: number
    limit: number
    next: string
    prev: string | null
}

export interface SpeciesItem {
    _id: string
    name: string
    description: string
    image: string
    __v: number
}