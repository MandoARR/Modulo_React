import { PokeItem } from "../models/pokemons";

export function PokeList({ pokemons }: {pokemons: PokeItem}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>URL</th>
                    <th>Acciones</th>
                </tr>
            </thead>

            <tbody>
                {pokemons.map((pokemon:PokeItem) => (
                        <tr key={pokemon.name}>
                            <td>{pokemon.name}</td>
                            <td>{pokemon.url}</td>
                            <td>
                                <button>Detalles</button>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}