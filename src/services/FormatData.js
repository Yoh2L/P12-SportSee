import API from "../services/Api";

export async function getAverageChartData(id) {
	const api = new API();

	const response = await api.getAverageSessions(id).then((data) => {
		return data;
	});

	let results = [];

	const days = ["L", "M", "M", "J", "V", "S", "D"];

	const sessions = response.data.sessions;

	sessions.forEach((session) => {
		results.push({
			name: days[session.day - 1],
			sessionLength: session.sessionLength,
		});
	});
	return results;
}

export async function getDailyActivityData(id) {
	const api = new API();

	const response = await api.getActivity(id).then((data) => {
		return data;
	});

	const userData = response.data.sessions;

	let userDataDisplay = userData.map(({ kilogram, calories }, index) => {
		return {
			kilogram: kilogram,
			calories: calories,
			day: (index + 1).toString(),
		};
	});
	return userDataDisplay;
}

export async function getRadarData(id) {
	const api = new API();

	const response = await api.getPerformance(id).then((data) => {
		return data;
	});

	const userData = response.data.data;

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
	return stat;
}

export async function getScoreData(id) {
	const api = new API();

	const response = await api.getUser(id).then((data) => {
		return data;
	});

	const userData = response.data.todayScore || response.data.score;

	return userData;
}

export async function getMacronutrientData(id) {
	const api = new API();

	const response = await api.getUser(id).then((data) => {
		return data;
	});

	const userData = response.data.keyData;

	return userData;
}

export async function getUserData(id) {
	const api = new API();

	const response = await api.getUser(id).then((data) => {
		return data;
	});

	const userData = response.data.userInfos;

	return userData;
}
