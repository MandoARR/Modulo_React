import { PokeInfo } from "../models/pokemons" 

export function PokeDetails({pokemon}: {pokemon:PokeInfo}) {

    return (
        <div className="pokemon-details">
            <h2>{pokemon.name}</h2>
            <hr/>
            <div className="main-description">
                <span>{pokemon.id}</span>
                <span>{pokemon.location_area_encounters}</span>
                <span></span>
            </div>

        </div>
    )
}