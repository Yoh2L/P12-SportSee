import React from "react";
import API from "../services/Api";
import { USER_ACTIVITY } from "../services/Mocked";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const DailyActivityChart = (userId) => {
	/* const api = new API(); */

	/* api.getUser(12).then((data) => console.log(data)); */

	const userIndex = USER_ACTIVITY.findIndex((obj) => {
		return obj.userId === userId.id;
	});

	const userData = USER_ACTIVITY[userIndex];

	let userDataDisplay = userData.sessions.map(
		({ kilogram, calories }, index) => {
			return {
				kilogram: kilogram,
				calories: calories,
				day: (index + 1).toString(),
			};
		}
	);

	const CustomTooltip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			return (
				<div className="activity-tooltip">
					<p className="activity-tooltip-kg">{`${payload[0].value}Kg`}</p>
					<p className="activity-tooltip-kcal">{`${payload[1].value}kCal`}</p>
				</div>
			);
		}

		return null;
	};

	return (
		<div className="daily-activity">
			<ResponsiveContainer
				width="100%"
				height="100%"
				className="daily-activity-chart"
			>
				<BarChart
					width={500}
					height={300}
					data={userDataDisplay}
					margin={{
						top: 80,
						right: 50,
						left: 45,
						bottom: 20,
					}}
					barSize={8}
					barGap={8}
				>
					<CartesianGrid strokeDasharray="3 3" vertical={false} />
					<XAxis
						dataKey="day"
						tickLine={false}
						stroke=" #DEDEDE"
						tick={{ fill: "#9B9BAC", fontWeight: 500, fontSize: 14 }}
						padding={{ left: -50, right: -50 }}
						tickMargin={16}
					/>
					<YAxis
						yAxisId="kilogram"
						domain={["dataMin -1", "dataMax +2"]}
						tickLine={false}
						orientation="right"
						axisLine={false}
						tick={{ fill: "#9B9BAC", fontWeight: 500, fontSize: 14 }}
						tickMargin={40}
						minTickGap={30}
					/>
					<YAxis yAxisId="calories" hide />
					<Tooltip content={<CustomTooltip />} />
					<Legend
						className="activityLegend"
						verticalAlign="top"
						align="right"
						iconType={"circle"}
						iconSize={8}
						width={300}
						height={25}
						wrapperStyle={{ top: 38, right: 32 }}
						formatter={(value) => {
							return (
								<span
									style={{ color: "#74798C", fontSize: 14, fontWeight: 500 }}
								>
									{value}
								</span>
							);
						}}
					/>
					<Bar
						yAxisId="kilogram"
						dataKey="kilogram"
						name="Poids (kg)"
						fill="#282D30"
						radius={[4, 4, 0, 0]}
					/>
					<Bar
						yAxisId="calories"
						dataKey="calories"
						name="Calories brûlées (kCal)"
						fill="#E60000"
						radius={[4, 4, 0, 0]}
					/>
					<text
						className="graphTitle"
						x="5%"
						y="15%"
						dominantBaseline="middle"
						fill="#20253A"
						style={{ fontWeight: 700 }}
					>
						Activité quotidienne
					</text>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default DailyActivityChart;
