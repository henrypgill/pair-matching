

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

export function PairCard({url, showing, id, matched, dispatchAction}: Image): JSX.Element {

    const backOfCardURL = ""

    function handleShowCard(cardID: number) {
        const action: Action = {
            type: 'showCard',
            id: cardID,
          };
        dispatchAction(action)
    }


    // <img src={showing ? url : backOfCardURL} className={`image-card`}></img>

    if (matched || showing) {
        return (
            <button onClick={() => handleShowCard(id)}>{url}</button>
    )} else {
        return(
            <button onClick={() => handleShowCard(id)}>hmm</button>
    )}
}