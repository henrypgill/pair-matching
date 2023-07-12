
interface Image {
    url: string;
    showing: boolean;
    id: string;
}


export function PairCard({url, showing, id}: Image): JSX.Element {

    const backOfCardURL = ""

    return (
        <button>
            <img src={showing ? url : backOfCardURL} className={`image-card`}></img>
        </button>

    )
}