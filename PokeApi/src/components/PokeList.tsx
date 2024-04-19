import { PokeItem } from "../models/pokemons";

export function PokeList({
    pokemons, onClickDetails
}: {
    pokemons: PokeItem[];
    onClickDetails: (url: string) => void
}) {
    const handleClickDetails = (url: string) => {
        onClickDetails(url)
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>URL</th>
                    <th>Acciones</th>
                </tr>
            </thead>

            <tbody>-
                {pokemons.map((pokemon: PokeItem) => (
                    <tr key={pokemon.name}>
                        <td>{pokemon.name}</td>
                        <td>{pokemon.url}</td>
                        <td>
                            <button onClick={() => handleClickDetails(pokemon.url)}>
                                Detalles
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}