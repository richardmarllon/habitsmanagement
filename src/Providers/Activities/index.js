import { habitsAPI } from "../../services/api";
import { useUser } from "../User";
const { createContext, useContext, useState, useEffect } = require("react");

const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
	const [activities, setActivities] = useState([]);
	const { userToken, userGroup } = useUser();

	useEffect(() => {
		if (userToken !== "") {
			const AuthConfig = { Authorization: `Bearer ${JSON.parse(userToken)}` };
			async function GetActivities() {
				const response = await habitsAPI.get(
					`activities/?group=${userGroup}&page=1`,
					{
						headers: AuthConfig,
					}
				);

				setActivities(response.data.results);
			}
			GetActivities();
		}
	}, [userToken, userGroup]);

	return (
		<ActivitiesContext.Provider value={{ activities, setActivities }}>
			{children}
		</ActivitiesContext.Provider>
	);
};

export const useActivities = () => useContext(ActivitiesContext);
