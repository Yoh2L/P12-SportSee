import API from "../services/Api";
/**
 * @file FormatData.js is an import and format datas file
 */
/**
 * import and format data for the average duration chart
 * @param {number} id
 * @returns {Array<object>} Each objects contains name and session's length
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
	 * Array contains each days
	 * @type {Array<letters>}
	 */
	const days = ["L", "M", "M", "J", "V", "S", "D"];

	const sessions = response.data.sessions;
	/**
	 * Push the datas in an array.
	 * @type {Array<object>}
	 * @param name: days {string}
	 * @param sessionLength: duration {numbers}
	 */
	let results = [];
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
	 * Map the datas in an array.
	 * @type {Array<object>}
	 * @param kilogram: kilogram {numbers}
	 * @param calories: calories {numbers}
	 * @param day: day number {number}
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
 * @returns {Array<object>}
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
		"Cardio",
		"Energie",
		"Endurance",
		"Force",
		"Vitesse",
		"Intensité",
	];
	/**
	 * Map datas in an array.
	 * @type {array<object>}
	 * @param value: performance score {numbers}
	 * @param kind: kind type {string}
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
 * @returns {number}
 */
export async function getScoreData(id) {
	const api = new API();

	const response = await api.getUser(id);
	/**
	 * Due to back-end error there's two possible keys : todayScore or score.
	 */
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
	/**
	 * Get macronutrients datas
	 * @param calorieCount: {numbers}
	 * @param carbohydrateCount: Glucides {numbers}
	 * @param lipidCount: Lipides {numbers}
	 * @param proteinCount: Proteins {numbers}
	 */
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
	/**
	 * Get user datas
	 * @param age: age {number}
	 * @param firstName: first name {string}
	 * @param lastName: last name {string}
	 */
	const userData = response.data.userInfos;
	return userData;
}
