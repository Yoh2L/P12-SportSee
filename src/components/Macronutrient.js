/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getMacronutrientData } from "../services/FormatData";
import calorieIcon from "../assets/calories-icon.png";
import proteinIcon from "../assets/protein-icon.png";
import carbsIcon from "../assets/carbs-icon.png";
import fatIcon from "../assets/fat-icon.png";

/**
 * @component React component : render the macronutrients and calories
 * @param {number} userId
 * @returns {JSX.Element}
 */

const Macronutrient = (userId) => {
	const [datas, setDatas] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchDatas() {
			/**
			 * Call the import and format function
			 * @param {number} userId
			 * @return {object} Average sessions datas (sessions, kg and calories)
			 */
			const newDatas = await getMacronutrientData(userId.id);
			setDatas(newDatas);
		}
		fetchDatas();
		setIsLoading(false);
	}, [isLoading]);

	return (
		<>
			{isLoading && <div>Loading</div>}
			{!isLoading && (
				<div className="macronutrient">
					<div className="macronutrient-section">
						<img
							src={calorieIcon}
							alt="calorie icon"
							className="macronutrient-icon"
						/>
						<div>
							<div className="macronutrient-section-count">
								{datas.calorieCount}kCal
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
								{datas.proteinCount}g
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
								{datas.carbohydrateCount}g
							</div>
							<div className="macronutrient-section-name">Glucides</div>
						</div>
					</div>
					<div className="macronutrient-section">
						<img
							src={fatIcon}
							alt="calorie icon"
							className="macronutrient-icon"
						/>
						<div>
							<div className="macronutrient-section-count">
								{datas.lipidCount}g
							</div>
							<div className="macronutrient-section-name">Lipides</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

Macronutrient.propTypes = {
	id: PropTypes.number.isRequired,
};

export default Macronutrient;
