import {useState, useEffect, useReducer } from "react"
import { PairCard } from "./PairCard";

interface Image {
    url: string;
    showing: boolean;
    id: number;
    matched: boolean;
    dispatchAction(action: Action): void;
}

interface Action {
    type: string;
    id: number;
}


export function PairMatchingApp(): JSX.Element {

    const cardTextArray: string[] = ['😅', '💩', '✊🏼', '🪖', '🐸', '🥧', '🥜', '🍿']
    const initialImages: Image[] = cardTextArray.map((emoji: string): Image => {
        return {
            url: emoji,
            showing: false,
            id: cardTextArray.indexOf(emoji),
            matched: false,
            dispatchAction: (action: Action) => cardDispatch(action),
        }
    })

    // const fetchURL = (pokeID: string): string => `${pokeID}`;
    // const boardSize = 4;

    const [cards, cardDispatch] = useReducer(cardReducer, initialImages)

    function cardReducer(imagesState: Image[], imageAction: Action): Image[] {

        const newImage: Image = {
            url: "",//imagesState.find((image: Image) => image.id === imageAction.id).url,
            showing: false,
            id: imageAction.id,
            matched: false,
            dispatchAction: (action: Action) => cardDispatch(action),
        }

        switch (imageAction.type) {
            case 'show':
                return initialImages//imagesState.map((image: Action) => action.id === image.id ? null : null)
            case 'match':
                return initialImages
            default:
                return initialImages;
            break;
        }
    }

    return (
        <>
            {cards.map(PairCard)}
        </>
    )


}