import React from "react";
import API from "../services/Api";
import { USER_MAIN_DATA } from "../services/Mocked";
import {
	RadialBarChart,
	RadialBar,
	Legend,
	PolarAngleAxis,
	ResponsiveContainer,
} from "recharts";

const ScoreChart = (userId) => {
	/* 	const api = new API();

	api.getAverageSessions(12).then((data) => console.log(data)); */

	const userIndex = USER_MAIN_DATA.findIndex((obj) => {
		return obj.id === userId.id;
	});

	const userData = USER_MAIN_DATA[userIndex].todayScore;

	const Score = [
		{
			uv: userData * 100,
			fill: "#ff0000",
		},
	];

	const ScoreLegend = () => {
		return (
			<div className="score-legend">
				<div className="score-legend-score">{userData * 100}%</div>
				<div className="score-legend-text">de votre objectif</div>
			</div>
		);
	};

	console.log(Score);

	return (
		<div className="score-chart">
			<ResponsiveContainer width="100%" height="100%">
				<RadialBarChart
					innerRadius={80}
					outerRadius={260}
					barSize={10}
					startAngle={-270}
					endAngle={90}
					data={Score}
				>
					<circle cx="50%" cy="50%" fill="white" r="80"></circle>
					<PolarAngleAxis
						type="number"
						domain={[0, 100]}
						angleAxisId={0}
						tick={false}
					/>
					<RadialBar
						background={{ fill: "#fbfbfb" }}
						dataKey="uv"
						cornerRadius="10"
					/>
					<Legend verticalAlign="middle" align="center" content={ScoreLegend} />
					<text
						className="graphTitle"
						x="5%"
						y="10%"
						dominantBaseline="middle"
						style={{ fontWeight: 700, fontSize: 16 }}
					>
						Score
					</text>
				</RadialBarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default ScoreChart;
