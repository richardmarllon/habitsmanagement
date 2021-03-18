import { habitsAPI } from "../../services/api";
import { useUser } from "../User";
const { createContext, useContext, useState, useEffect } = require("react");

const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
	const [habits, setHabits] = useState([]);
	const [personalHabits, setPersonalHabits] = useState([]);
	const { userToken } = useUser();

	useEffect(() => {
		if (userToken !== "") {
			const AuthConfig = { Authorization: `Bearer ${JSON.parse(userToken)}` };
			async function GetPersonalHabits() {
				const response = await habitsAPI.get(`habits/personal/`, {
					headers: AuthConfig,
				});
				setPersonalHabits(response.data);
			}
			GetPersonalHabits();
		}
	}, [userToken, setPersonalHabits]);

	return (
		<HabitsContext.Provider
			value={{ habits, setHabits, personalHabits, setPersonalHabits }}
		>
			{children}
		</HabitsContext.Provider>
	);
};

export const useHabits = () => useContext(HabitsContext);
