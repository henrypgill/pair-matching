import { useReducer } from "react"
import { PairCard } from "./PairCard";
import { shuffleArray } from "./Utils/shuffleArray";

interface Image {
    url: string;
    showing: boolean;
    id: number;
    matched: boolean;
    cardDispatch(action: Action): void;
    waiting: boolean
}

interface Action {
    type: string;
    id: number;
    url: string;
}


export function PairMatchingApp(): JSX.Element {


    let waitingStatus = false;

    const emojis: string[] = ['😅', '💩', '✊🏼', '🪖', '🐸', '🥧', '🥜', '🍿']
    const cardTextArray: string[] = shuffleArray([...emojis, ...emojis])
    const initialImages: Image[] = cardTextArray.map((emoji: string, index = 0): Image => {
        return {
            url: emoji,
            showing: false,
            id: index++,
            matched: false,
            cardDispatch: (action: Action) => cardDispatch(action),
            waiting: false,
        }
    })

    const [cards, cardDispatch] = useReducer(cardReducer, initialImages)


    async function resetCards() {
        console.log("attempting to dispatch reset")
        await new Promise(r => setTimeout(r, 500));
        const action: Action = {
            type: 'reset',
            id: -1,
            url: "reset",
          };
          waitingStatus = false;
          cardDispatch(action)
    }

    function cardReducer(state: Image[], action: Action): Image[] {
        const activeCards = state.filter((image: Image) => image.showing ? image : null);
        console.log(activeCards)

        if (activeCards.find(image => image.url === action.url)){
            return state.map((image: Image) => image.url === action.url ? {...image, matched: true, showing: false, waiting: waitingStatus} : {...image, showing: false, waiting: waitingStatus} )
        }

        if (activeCards.length === 1) {
            waitingStatus = true;
            const wait = new Promise(r => setTimeout(r, 2000));
            wait.then(() => resetCards());
            return state.map((image) => image.id === action.id ? {...image, showing: true, waiting: waitingStatus} : {...image, waiting:  waitingStatus});
        }




        switch (action.type) {
            case 'show': 
                return state.map((image) => image.id === action.id ? {...image, showing: true, waiting: waitingStatus} : image);
            case 'reset':
                return state.map((image) => {return {...image, showing: false, waiting: waitingStatus}})
            default:
                return state;
            break;
        }
    }




    return (
        <div className="card-container">
            {cards.map(PairCard)}
        </div>
    )


}