import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

//create your first component
const Home = () => {
	return (
		<>
		<Navbar />
		<div className="container p-5" >
			<Jumbotron />
			<div className="row">
				<div className="col m-3">
					<Card />
				</div>
				<div className="col m-3">
					<Card />
				</div>
				<div className="col m-3">
					<Card />
				</div>
				<div className="col m-3">
					<Card />
				</div>
			</div>
		</div>
		</>

	);
};

export default Home;