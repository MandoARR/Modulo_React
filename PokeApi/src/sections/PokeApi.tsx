import { useEffect, useState } from "react";
import { PokeDetails } from "../components/PokeDetails";
import { PokeList } from "../components/PokeList";
import { PokeItem, PokemonResponse } from "../models/pokemons";

const URL = "https://pokeapi.co/api/v2/pokemon/"

export function PokeApi() {
    const [pokemons, setPokemons] = useState<PokeItem[]>()

    // Recibe función anónima y una dependencia
    // Esta dependcia dicta cuando se ejecuta la función anónima
    // Cuando la dependencia cambia, se ejecuta la función anónima
    // Cuando está [] vacío, se ejecuta solo una vez

    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((data: PokemonResponse) => {
                setPokemons(data.results)
            })
    }, []) //[] = Sólo cuando se carga el componente

    return (
        <div>
            <h1>PokeApi</h1>
            <PokeList pokemons={pokemons}></PokeList>
            <PokeDetails></PokeDetails>
        </div>
    )
}