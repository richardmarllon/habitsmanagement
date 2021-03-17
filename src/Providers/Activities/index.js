import { habitsAPI } from "../../services/api";
import { useGroups } from "../Groups";
import { useUser } from "../User";
const { createContext, useContext, useState, useEffect } = require("react");

const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
	const [userActivities, setUserActivities] = useState([]);
	const [activities, setActivities] = useState([]);
	const { userToken, userGroup } = useUser();
	const { changer } = useGroups();

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
				setUserActivities(response.data.results);
			}
			GetActivities();
		}
	}, [userToken, userGroup, changer]);

	return (
		<ActivitiesContext.Provider
			value={{ activities, setActivities, userActivities }}
		>
			{children}
		</ActivitiesContext.Provider>
	);
};

export const useActivities = () => useContext(ActivitiesContext);
