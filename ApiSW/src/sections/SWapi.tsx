import { useEffect, useState } from "react"
import { Response_sw, SpeciesItem } from "../models/Species"
import { SpeciesList } from "../components/SpeciesList"

const URL = ""

export function SWapi(){
    const [species, setSpecies] = useState<SpeciesItem[]>([])
    
    useEffect(() => {
        fetch(URL)
        .then((response) => response.json())
        .then((data: Response_sw) => {
            setSpecies(data.data)
        })
    }, [])

    return(
        <div>
            <h1>Especies Star Wars</h1>
            <SpeciesList></SpeciesList>
        </div>
    )
}