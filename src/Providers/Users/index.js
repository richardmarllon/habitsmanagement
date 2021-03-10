const { createContext, useContext, useState } = require("react");

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
	const [users, setUsers] = useState([]);

	return (
		<UsersContext.Provider value={{ users, setUsers }}>
			{children}
		</UsersContext.Provider>
	);
};

export const useUsers = () => useContext(UsersContext);
