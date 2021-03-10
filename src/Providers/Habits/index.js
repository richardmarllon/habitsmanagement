import { habitsAPI } from "../../services/api";
const { createContext, useContext, useState, useEffect } = require("react");

const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
	const [habits, setHabits] = useState([]);
	const [personalHabits, setPersonalHabits] = useState([]);

	const token = localStorage.getItem("token") || ""; //after insert Token State, need to change  this token below to Token State

	useEffect(() => {
		if (token !== "") {
			const AuthConfig = { Authorization: `Bearer ${token}` };
			async function GetPersonalHabits() {
				const response = await habitsAPI.get(`habits/personal/`, {
					headers: AuthConfig,
				});
				setPersonalHabits(response.data);
			}
			GetPersonalHabits();
		}
	}, []);

	return (
		<HabitsContext.Provider
			value={{ habits, setHabits, personalHabits, setPersonalHabits }}
		>
			{children}
		</HabitsContext.Provider>
	);
};

export const useHabits = () => useContext(HabitsContext);
