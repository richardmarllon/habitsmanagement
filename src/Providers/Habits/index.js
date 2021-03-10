const { createContext, useContext, useState } = require("react");

const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
	const [habits, setHabits] = useState([]);

	return (
		<HabitsContext.Provider value={{ habits, setHabits }}>
			{children}
		</HabitsContext.Provider>
	);
};

export const useHabits = () => useContext(HabitsContext);