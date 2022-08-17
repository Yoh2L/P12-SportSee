import axios from "axios";
import { useEffect, useState } from "react";

const Call = (endpoint) => {
	const [data, setData] = useState([]);
	const userId = window.location.pathname;

	useEffect(() => {
		axios
			.get(`http://localhost:3000/user/12`)
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
		console.log(data);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userId, endpoint]);
};

export default Call;
