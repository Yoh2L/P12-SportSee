/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getRadarData } from "../services/FormatData";
import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	ResponsiveContainer,
} from "recharts";

/**
 * @file React component : radar chart
 * @returns {JSX}
 */

const Chart = (userId) => {
	const [datas, setDatas] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchDatas() {
			/**
			 * Call the import and format function
			 * @param {number} id
			 * @return {Array<object>} Radar datas (kinds and values)
			 */
			const newDatas = await getRadarData(userId.id);
			setDatas(newDatas);
		}
		fetchDatas();
		setIsLoading(false);
	}, [isLoading]);

	return (
		<>
			{isLoading && <div>Loading</div>}
			{!isLoading && (
				<div className="radar-chart">
					<ResponsiveContainer width="100%" height="100%">
						<RadarChart cx="50%" cy="50%" outerRadius="70" data={datas}>
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
			)}
		</>
	);
};

Chart.propTypes = {
	id: PropTypes.number.isRequired,
};

export default Chart;
