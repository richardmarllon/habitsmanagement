const { createContext, useContext, useState } = require("react");

const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
	const [goals, setGoals] = useState([]);

	return (
		<GoalsContext.Provider value={{ goals, setGoals }}>
			{children}
		</GoalsContext.Provider>
	);
};

export const useGoals = () => useContext(GoalsContext);
