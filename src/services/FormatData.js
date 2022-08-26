import API from "../services/Api";

export default async function formatData(id, tata) {
	const api = new API();

	const titi = await api.getAverageSessions(id).then((data) => {
		return data;
	});

	const days = ["L", "M", "M", "J", "V", "S", "D"];

	const toto = titi.data.sessions;

	toto.forEach((session) => {
		tata.push({
			name: days[session.day - 1],
			sessionLength: session.sessionLength,
		});
	});
	console.log(tata);
	return tata;
}
