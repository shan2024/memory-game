import ScoreBoard from "./ScoreBoard";
import GameBoard from "./GameBoard";
import react, {useState} from "react";

function GameScreen() {

    const [currentScore, setCurrentScore ] = useState(0);
    const [bestScore, setBestScore ] = useState(0);

    function incrementCurrentScore( ) {

        setCurrentScore( currentScore + 1);
    }

    function resetCurrentScore() {
        setCurrentScore(0);
    }


    return (
      <div className="game-screen">
        <ScoreBoard currentScore = {currentScore} bestScore = {bestScore} />
        <GameBoard currentScore = {currentScore} bestScore = {bestScore} incrementCurrentScore = {incrementCurrentScore} resetCurrentScore = {resetCurrentScore}
        setBestScore = {setBestScore}/>
      </div>
    );
  }
  
  export default GameScreen;