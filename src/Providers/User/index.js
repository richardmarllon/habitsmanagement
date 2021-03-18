import { habitsAPI } from "../../services/api";
import jwt_decode from "jwt-decode";

const { createContext, useContext, useState, useEffect } = require("react");
const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const token = localStorage.getItem("token") || "";
	const [user, setUser] = useState(token);
	const [userToken, setUserToken] = useState(token);
	const [userGroup, setUserGroup] = useState(null);
	const [changeGroupSignal, setChangeGroupSignal] = useState(false);
	const [showLogin, setShowLogin] = useState(true);

	if (token && typeof user !== "number") {
		setUser(jwt_decode(token).user_id);
	}
	useEffect(() => {
		setUserToken(localStorage.getItem("token") || "");
		if (typeof user === "number") {
			async function getUserGroup() {
				const getGroup = await habitsAPI.get(`users/${user}/`);
				setUserGroup(getGroup.data.group);
			}
			getUserGroup();
		}
	}, [user, token, userGroup, changeGroupSignal]);
	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				userToken,
				setUserToken,
				userGroup,
				setUserGroup,
				changeGroupSignal,
				setChangeGroupSignal,
				showLogin,
				setShowLogin,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
export const useUser = () => useContext(UserContext);
