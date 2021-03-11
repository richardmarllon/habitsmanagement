import jwt_decode from "jwt-decode";

const { createContext, useContext, useState } = require("react");

const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const token = localStorage.getItem("token") || "";

	const [user, setUser] = useState(token);
	const [userToken, setUserToken] = useState(token);

	if (token && typeof user !== "number") {
		setUser(jwt_decode(token).user_id);
	}

	return (
		<UserContext.Provider value={{ user, setUser, userToken, setUserToken }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => useContext(UserContext);
