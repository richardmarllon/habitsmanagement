import { habitsAPI } from "../../services/api";
import { useGroups } from "../Groups";

const { createContext, useContext, useState, useEffect } = require("react");

const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
	const [goals, setGoals] = useState([]);
	const [userGoals, setUserGoals] = useState([]);
	const { userGroup } = useGroups();

	useEffect(() => {
		if (!goals[0]) {
			async function getPersonalHabits() {
				const response = await habitsAPI.get(`goals/`);
				setGoals([...response.data.results]);
			}
			getPersonalHabits();
		}
		setUserGoals(userGroup.goals);
	}, [goals, userGroup]);

	return (
		<GoalsContext.Provider value={{ goals, setGoals, userGoals }}>
			{children}
		</GoalsContext.Provider>
	);
};

export const useGoals = () => useContext(GoalsContext);
