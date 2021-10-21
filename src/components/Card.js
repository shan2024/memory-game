import Shape from "./Shape";
import "../styles/Card.css";
function Card(props) {

    return (
        <div className = "card-container">
        <div  onClick = {(e) => props.cardClicked(e, props.id )} className = "card" style ={{backgroundColor : props.card[0]}}>
            <Shape shape = {props.card[2] } shapeColor = {props.card[1]} />
        </div>
        </div>
    );
}

export default Card;