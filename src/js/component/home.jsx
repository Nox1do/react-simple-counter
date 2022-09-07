import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function Home(props) {
	return (
	  <div className='App'>
		<div><p>🕛</p></div>
		<div><p>0</p></div>
		<div><p>0</p></div>
		<div><p>0</p></div>
		<div><p>0</p></div>
		<div><p>0</p></div>
		<div><p className="counter">0</p></div>
	  </div>
	);
  };

export default Home;


