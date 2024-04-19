import { useEffect, useState } from "react";
import { PokeDetails } from "../components/PokeDetails";
import { PokeList } from "../components/PokeList";
import { PokeItem, PokemonResponse, PokeInfo } from "../models/pokemons";

const URL = "https://pokeapi.co/api/v2/pokemon/"

export function PokeApi() {
    const [pokemons, setPokemons] = useState<PokeItem[]>([])
    const [selectedUrl, setSelectedUrl] =useState<string>("") 
    const [selectedPokemon, setSelectedPokemon] =useState<PokeInfo>()

    // Recibe función anónima y una dependencia
    // Esta dependcia dicta cuando se ejecuta la función anónima
    // Cuando la dependenc-ia cambia, se ejecuta la función anónima
    // Cuando está [] vacío, se ejecuta solo una vez

    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((data: PokemonResponse) => {
                setPokemons(data.results)
            })
    }, []) //[] = Sólo cuando se carga el componente

    useEffect(() => {
        if(selectedUrl){
            fetch(selectedUrl)
            .then((response) => response.json())
            .then((data: PokeInfo) => {
                
            })
        }
    }, [selectedUrl])

    const handleOnClickDetails = (url: string) => {
        setSelectedUrl(url)
    }

    return (
        <div>
            <h1>PokeApi</h1>
            <PokeList pokemons={pokemons} onClickDetails={handleOnClickDetails}></PokeList>
            {selectedPokemon ? <PokeDetails pokemon={selectedPokemon}/> : null}
        </div>
    )
}