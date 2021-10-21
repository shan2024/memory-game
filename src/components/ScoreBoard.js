import "../styles/ScoreBoard.css";

function ScoreBoard(props) {

    return (
        <div className = "score-board">
            <h2 id = "current-score">Current Score: {props.currentScore}</h2>
            <h2 id = "best-score">Best Score: {props.bestScore}</h2>
        </div>
    );
}

export default ScoreBoard;