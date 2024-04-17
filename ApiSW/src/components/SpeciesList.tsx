import { SpeciesItem } from "../models/Species";

export function SpeciesList({species}:{species:SpeciesItem[]}){
    return(
        <table>
            <thead>
                <th>NOMBRE</th>
                <th>IMAGEN</th>
                <th>DESCRIPCION</th>
            </thead>

            <tbody>
                <td></td>
            </tbody>
        </table>
    )
}