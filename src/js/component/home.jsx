import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faClock} from "@fortawesome/free-solid-svg-icons"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function Home(props) {
	return (
<div className='App'>
	<div className="bigCounter"> 
		<div className="calendar"> 
		<FontAwesomeIcon icon={faClock}></FontAwesomeIcon></div> 
		<div className="four">{props.digitFour %10}</div> 
		<div className="three">{props.digitThree %10}</div>
		<div className="two">{props.digitTwo %10}</div>  
		<div className="one">{props.digitOne %10}</div> 
	 </div>
</div>
	);
  };


export default Home;


