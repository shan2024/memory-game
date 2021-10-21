import { useState, useEffect } from "react";
import Card from "./Card";
import uniqid from "uniqid";
import "../styles/GameBoard.css";
function GameBoard(props) {

    const [ cards, setCards ] = useState( returnInitialCards() );
    const [ usedCards, setUsedCards ] = useState( [] );

    function returnInitialCards() {
        
        let initialCards = [];
        for (let i = 0; i < 16; i++){
            initialCards.push([ "rgb(" + Math.floor(Math.random() * 256) + "," + 
            Math.floor(Math.random() * 256) + "," + 
            Math.floor(Math.random() * 256) + ")", "rgb(" + Math.floor(Math.random() * 256) + "," + 
            Math.floor(Math.random() * 256) + "," + 
            Math.floor(Math.random() * 256) + ")", 
            Math.random() > .66 ? "circle" : Math.random() > .33 ? "square" : "triangle", uniqid(), i ] );
        }

        return initialCards;
    }

    function randomizeCards(){
        let array = Array.from( cards);
        let currentIndex = array.length;
        let randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        setCards( array);
    }
    
    function cardClicked( e, id) {
        e.preventDefault();
        // console.log(id);
        // console.log(typeof(id));
        // console.log(usedCards);
        //setUsedCards( usedCards.concat( "dfsdf"));
        if ( usedCards.includes( id) ) {
            //uh oh, we messed up
            if (props.currentScore > props.bestScore) {
                props.setBestScore( props.currentScore);
            }
            setUsedCards( [] );
            setCards(returnInitialCards());
            props.resetCurrentScore();
            //console.log("we messed up");
        }else {
            //all  good, keep going
            
            setUsedCards( usedCards.concat( id));
            props.incrementCurrentScore();
            randomizeCards();
                //console.log(usedCards);

            if (usedCards.length == 15){
                //console.log("won");
                setUsedCards([]);
                setCards(returnInitialCards());
            }
                
            
            
        }
    }

    return (
        <div className = "game-board"  >
            { cards.map( (card, index) => {
                return (
                    <Card id = { card[4]} card = {card} key = { card[3]} cardClicked = { cardClicked}></Card>
                );
            } )   }
        </div>
    );
}

export default GameBoard;