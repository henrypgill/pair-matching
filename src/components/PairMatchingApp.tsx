import {useState, useEffect } from "react"
import { PairCard } from "./PairCard";

interface Image {
    url: string;
    showing: boolean;
    id: string;
}

export function PairMatchingApp(): JSX.Element {


    const fetchURL = (pokeID: string): string => `${pokeID}`;
    const boardSize = 4;
    useEffect( 
        () => {
            const fetchPromise= fetch(fetchURL).then((response) => response.json).then((result) => result)
            for (let i = 0; i < boardSize; i++){
                // const fetchResult = fetchPromise;
            }
            setImageArray((prev) => [fetchPromise])
        },
        []
    )

    const 

    const [imageArray, setImageArray] = useState<string[]>([]);


    return (
        imageArray.map(PairCard)
    )


}