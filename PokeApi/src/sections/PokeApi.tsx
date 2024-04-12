import { PokeDetails } from "../components/PokeDetails";
import { PokeList } from "../components/PokeList";
import { useEffect, useState } from "react";
import { PokemonResponse } from "../models/pokemons";

const URL = "https://pokeapi.co/api/v2/pokemon/"
export function PokeApi() {
    const [pokemons, setPokemons] = useState<pokeItem[]>()

    useEffect(() => {
        fetch(URL)
        .then((response) => response.json())
        .then((data: PokemonResponse) => {
            setPokemons(data.results)
        })
    })

    return (
        <div>
            <h1>PokeApi</h1>
            <PokeList pokemons={pokemons}></PokeList>
            <PokeDetails></PokeDetails>
        </div>
    )
}