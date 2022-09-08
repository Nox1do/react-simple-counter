//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//propTypes
Home.propTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
};

//counter code here
let counter = 0;
setInterval(function(){
const four = Math.floor(counter/10000)
const three = Math.floor(counter/1000)
const two = Math.floor(counter/10)
const one = Math.floor(counter/1)
counter++;
//render your react application
ReactDOM.render(<Home
    digitOne ={one}
    digitTwo ={two}
    digitThree ={three}
    digitFour= {four}
    
    />, document.querySelector("#app"));
},1000)





