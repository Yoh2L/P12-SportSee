import React from "react";
import formatData from "../services/FormatData";
import { USER_MAIN_DATA } from "../services/Mocked";
import HorizontalNav from "../components/HorizontalNav";
import VerticalNav from "../components/VerticalNav";
import RadarChart from "../components/RadarChart";
import ScoreChart from "../components/ScoreChart";
import DailyActivityChart from "../components/DailyActivityChart";
import AverageDurationChart from "../components/AverageDurationChart";
import Macronutrient from "../components/Macronutrient";

const Home = () => {
	const id = 12;

	const userIndex = USER_MAIN_DATA.findIndex((obj) => {
		return obj.id === id;
	});

	const userData = USER_MAIN_DATA[userIndex].userInfos;

	return (
		<div className="home">
			<HorizontalNav />
			<div className="home-body">
				<VerticalNav />
				<div className="home-content">
					<div className="home-user">
						<span className="home-user-hello">Bonjour </span>
						<span className="home-user-firstname">{userData.firstName}</span>
						<br />
						<br />
						<span className="home-user-greetings">
							Félicitation ! Vous avez explosé vos objectifs hier 👏
						</span>
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
						<div className="home-charts-second-column">
							<Macronutrient id={id} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
