const { createContext, useContext, useState } = require("react");

const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
	const [activities, setActivities] = useState([]);

	return (
		<ActivitiesContext.Provider value={{ activities, setActivities }}>
			{children}
		</ActivitiesContext.Provider>
	);
};

export const useActivities = () => useContext(ActivitiesContext);
