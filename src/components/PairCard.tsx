

interface Image {
    url: string;
    showing: boolean;
    id: number;
    matched: boolean;
    cardDispatch(action: Action): void;
    waiting: boolean;
}

interface Action {
    type: string;
    id: number;
    url: string;
}

export function PairCard({url, showing, id, matched, cardDispatch, waiting}: Image): JSX.Element {



    function handleShowCard() {
        if (!showing && !waiting){
        const action: Action = {
            type: 'show',
            id: id,
            url: url,
          };
          cardDispatch(action)}
    }
        return (
            <button key={id} onClick={handleShowCard} className={`card ${matched ? "matched-card" : ""} ${waiting}`}>{showing ? url : "hmm"}</button>
        )
}