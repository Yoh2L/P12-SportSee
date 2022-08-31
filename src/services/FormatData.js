import API from "../services/Api";

export default async function formatData(id) {
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
	console.log(results);
	return results;
}
