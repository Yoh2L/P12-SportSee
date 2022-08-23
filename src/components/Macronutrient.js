import React from "react";
import { USER_MAIN_DATA } from "../services/Mocked";
import API from "../services/Api";
import calorieIcon from "../assets/calories-icon.png";
import proteinIcon from "../assets/protein-icon.png";
import carbsIcon from "../assets/carbs-icon.png";
import fatIcon from "../assets/fat-icon.png";

const Macronutrient = (userId) => {
	/* 	const api = new API();

	api.getAverageSessions(12).then((data) => console.log(data)); */

	const userIndex = USER_MAIN_DATA.findIndex((obj) => {
		return obj.id === userId.id;
	});

	const userData = USER_MAIN_DATA[userIndex].keyData;

	return (
		<div className="macronutrient">
			<div className="macronutrient-section">
				<img
					src={calorieIcon}
					alt="calorie icon"
					className="macronutrient-icon"
				/>
				<div>
					<div className="macronutrient-section-count">
						{userData.calorieCount}kCal
					</div>
					<div className="macronutrient-section-name">Calories</div>
				</div>
			</div>
			<div className="macronutrient-section">
				<img
					src={proteinIcon}
					alt="calorie icon"
					className="macronutrient-icon"
				/>
				<div>
					<div className="macronutrient-section-count">
						{userData.proteinCount}g
					</div>
					<div className="macronutrient-section-name">Proteines</div>
				</div>
			</div>
			<div className="macronutrient-section">
				<img
					src={carbsIcon}
					alt="calorie icon"
					className="macronutrient-icon"
				/>
				<div>
					<div className="macronutrient-section-count">
						{userData.carbohydrateCount}g
					</div>
					<div className="macronutrient-section-name">Glucides</div>
				</div>
			</div>
			<div className="macronutrient-section">
				<img src={fatIcon} alt="calorie icon" className="macronutrient-icon" />
				<div>
					<div className="macronutrient-section-count">
						{userData.lipidCount}g
					</div>
					<div className="macronutrient-section-name">Lipides</div>
				</div>
			</div>
		</div>
	);
};

export default Macronutrient;
