const { createContext, useContext, useState } = require("react");

const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {
	const [calendar, setCalendar] = useState(new Date());

	return (
		<CalendarContext.Provider value={{ calendar, setCalendar }}>
			{children}
		</CalendarContext.Provider>
	);
};

export const useCalendar = () => useContext(CalendarContext);
