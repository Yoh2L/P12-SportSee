import axios from "axios";

/**Fetch API class */

export default class API {
	constructor() {
		/**API Adress
		 * @type {string}
		 */
		this.endpoint = "http://localhost:3000";
	}
	/**
	 * Fetch user datas
	 * @param {number} id of user
	 * @returns {object}
	 */
	async getUser(id) {
		const res = await axios.get(`${this.endpoint}/user/${id}`);
		return res.data;
	}
	/**
	 * Fetch average sessions datas
	 * @param {number} id
	 * @returns {object}
	 */
	async getAverageSessions(id) {
		const res = await axios.get(`${this.endpoint}/user/${id}/average-sessions`);
		return res.data;
	}
	/**
	 * Fetch activity datas
	 * @param {number} id
	 * @returns {object}
	 */
	async getActivity(id) {
		const res = await axios.get(`http://localhost:3000/user/${id}/activity`);
		return res.data;
	}
	/**
	 * Fetch performances datas
	 * @param {number} id
	 * @returns {object}
	 */
	async getPerformance(id) {
		const res = await axios.get(`http://localhost:3000/user/${id}/performance`);
		return res.data;
	}
}
