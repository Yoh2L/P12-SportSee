import React from "react";
import HorizontalNav from "../components/HorizontalNav";
import VerticalNav from "../components/VerticalNav";
import RadarChart from "../components/RadarChart";
import ScoreChart from "../components/ScoreChart";
import DailyActivityChart from "../components/DailyActivityChart";
import AverageDurationChart from "../components/AverageDurationChart";

const Home = () => {
	const id = 12;

	return (
		<div className="home">
			<HorizontalNav />
			<div className="home-body">
				<VerticalNav />
				<div className="home-content">
					<div className="home-user">
						<span>Bonjour Thomas</span> <br />
						<span>Félicitation ! Vous avez explosé vos objectifs hier </span>
					</div>
					<div className="home-charts">
						<div className="home-charts-first-column">
							<DailyActivityChart id={id} />
							<div className="home-charts-first-column-row-3">
								<AverageDurationChart id={id} />
								<RadarChart id={id} />
								<ScoreChart id={id} />
							</div>
						</div>
						<div className="home-charts-second-column"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
