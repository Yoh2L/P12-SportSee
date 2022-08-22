import React from "react";
import API from "../services/Api";
import { USER_PERFORMANCE } from "../services/Mocked";
import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	ResponsiveContainer,
} from "recharts";

/* 	const api = new API();

	api.getAverageSessions(12).then((data) => console.log(data)); */

const Chart = (userId) => {
	const userIndex = USER_PERFORMANCE.findIndex((obj) => {
		return obj.userId === userId.id;
	});

	const userData = USER_PERFORMANCE[userIndex].data;

	const Kind = [
		"cardio",
		"energy",
		"endurance",
		"strength",
		"speed",
		"intensity",
	];

	let stat = userData.map(({ value, kind }) => {
		return {
			value: value,
			kind: Kind[kind - 1],
		};
	});

	return (
		<div className="radar-chart">
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart cx="50%" cy="50%" outerRadius="85" data={stat}>
					<PolarGrid radialLines={false} />
					<PolarAngleAxis dataKey="kind" />
					<Radar
						name="Mike"
						dataKey="value"
						stroke="#FF0101"
						fill="#FF0101"
						fillOpacity={0.6}
					/>
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Chart;
