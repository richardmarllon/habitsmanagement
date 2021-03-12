import { habitsAPI } from "../../services/api";
import jwt_decode from "jwt-decode";

const { createContext, useContext, useState, useEffect } = require("react");

const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const token = localStorage.getItem("token") || "";

	const [user, setUser] = useState(token);
	const [userToken, setUserToken] = useState(token);
	const [userGroupID, setUserGroupID] = useState(null);

	if (token && typeof user !== "number") {
		setUser(jwt_decode(token).user_id);
	}

	useEffect(() => {
		if (typeof user === "number") {
			async function getUserGroupID() {
				const getGroup = await habitsAPI.get(`users/${user}/`);
				setUserGroupID(getGroup.data.group);
			}
			getUserGroupID();
		}
	}, [user]);

	return (
		<UserContext.Provider
			value={{ user, setUser, userToken, setUserToken, userGroupID }}
		>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => useContext(UserContext);
