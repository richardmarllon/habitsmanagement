import { habitsAPI } from "../../services/api";
const { createContext, useContext, useState, useEffect } = require("react");

const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
	const [activities, setActivities] = useState([]);
	const token = localStorage.getItem("token") || ""; //after insert Token State, need to change  this token below to Token State

	useEffect(() => {
		if (token !== "") {
			const AuthConfig = { Authorization: `Bearer ${token}` };
			async function GetActivities() {
				const response = await habitsAPI.get(`activities/`, {
					headers: AuthConfig,
				});
				setActivities(response.data.results);
			}
			GetActivities();
		}
	}, [token]);

	return (
		<ActivitiesContext.Provider value={{ activities, setActivities }}>
			{children}
		</ActivitiesContext.Provider>
	);
};

export const useActivities = () => useContext(ActivitiesContext);
