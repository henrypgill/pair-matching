// import { MyComponent } from "./MyComponent";
import "./App.css";
import { PairMatchingApp } from "./PairMatchingApp";

function App() {
    return (
        <div className="App">
            <div className="heading-container">
                <h1>Pair-Matching Game</h1>
            </div>
            <div className="content">
                <PairMatchingApp />
            </div>
        </div>
    );
}

export default App;
