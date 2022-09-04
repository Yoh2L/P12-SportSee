import API from "../services/Api";
/**
 * @file FormatData.js is an import and format datas file
 */
/**
 * import and format data for the average duration chart
 * @param {number} id
 * @returns {array<object>}
 */
export async function getAverageChartData(id) {
	/**
	 * Create a new API class
	 */
	const api = new API();
	/**
	 * Get the response of the fetch class
	 * @param {number} id
	 */
	const response = await api.getAverageSessions(id);
	/**
	 * Empty array, will be return with the datas for the chart
	 * @type {Array}
	 */
	let results = [];
	/**
	 * Array contains each days
	 * @type {Array<letters>}
	 */
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

/**
 * import and format data for the daily activity chart
 * @param {number} id
 * @returns {array<object>}
 */
export async function getDailyActivityData(id) {
	/**
	 * Create a new API class
	 */
	const api = new API();
	/**
	 * Get the response of the fetch class
	 * @param {number} id
	 */
	const response = await api.getActivity(id);

	const userData = response.data.sessions;
	/**
	 *
	 * @type {array<object>}
	 */
	let userDataDisplay = userData.map(({ kilogram, calories }, index) => {
		return {
			kilogram: kilogram,
			calories: calories,
			day: (index + 1).toString(),
		};
	});
	return userDataDisplay;
}

/**
 * import and format data for the radar chart
 * @param {number} id
 * @returns {array<object>}
 */
export async function getRadarData(id) {
	const api = new API();

	const response = await api.getPerformance(id);

	const userData = response.data.data;
	/**
	 * Contains every kind
	 * @type {Kind<array>}
	 */
	const Kind = [
		"cardio",
		"energy",
		"endurance",
		"strength",
		"speed",
		"intensity",
	];
	/**
	 * @type {array<object>}
	 */
	let stat = userData.map(({ value, kind }) => {
		return {
			value: value,
			kind: Kind[kind - 1],
		};
	});
	return stat;
}

/**
 * import and format data for the score chart
 * @param {number} id
 * @returns {array<object>}
 */
export async function getScoreData(id) {
	const api = new API();

	const response = await api.getUser(id);

	const userData = response.data.todayScore || response.data.score;
	return userData;
}

/**
 * import and format macronutrient datas
 * @param {number} id
 * @returns {object}
 */
export async function getMacronutrientData(id) {
	const api = new API();

	const response = await api.getUser(id);

	const userData = response.data.keyData;
	return userData;
}

/**
 * import and format user datas
 * @param {number} id
 * @returns {object}
 */
export async function getUserData(id) {
	const api = new API();

	const response = await api.getUser(id);

	const userData = response.data.userInfos;
	return userData;
}
