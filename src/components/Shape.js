import "../styles/Shapes.css";

function Shape(props) {

    return (
        //we create a css file with shape css class, then return that
        <div className = {"shape " +props.shape} style ={ props.shape == "triangle" ? {backgroundColor: props.shapeColor}:{ backgroundColor : props.shapeColor}}>
            {/* <div className = {"inner-"+props.shape} style = {{backgroundColor:props.shapeColor}}></div> */}
        </div>
    );
}

export default Shape;