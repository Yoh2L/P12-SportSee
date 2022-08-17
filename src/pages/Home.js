import React from "react";
import HorizontalNav from "../components/HorizontalNav";
import VerticalNav from "../components/VerticalNav";
import RadialChart from "../components/RadialChart";
import ScoreChart from "../components/ScoreChart";
import DailyActivityChart from "../components/DailyActivityChart";
import AverageDurationChart from "../components/AverageDurationChart";
import { USER_ACTIVITY } from "../services/Mocked";

const Home = () => {
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
							<DailyActivityChart sessions={USER_ACTIVITY[0]} />
							<div className="home-charts-first-column-row-3">
								<AverageDurationChart />
								<RadialChart />
								<ScoreChart />
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
