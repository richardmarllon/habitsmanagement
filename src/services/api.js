import axios from "axios";

export const habitsAPI = axios.create({
	baseURL: "https://kabit-api.herokuapp.com/",
});
