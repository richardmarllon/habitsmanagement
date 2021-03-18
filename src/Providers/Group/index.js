import { habitsAPI } from "../../services/api";
import { useUser } from "../../Providers/User";

const { createContext, useContext, useState, useEffect } = require("react");

const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
	const [group, setGroup] = useState(null);
	const [username, setUsername] = useState(null);
	const { userGroup, user } = useUser();

	useEffect(() => {
		if (userGroup) {
			async function getGroupUser() {
				const resp = await habitsAPI.get(`users/${user}/`);
				const response = await habitsAPI.get(`groups/${userGroup}/`);

				setGroup(response.data);
				setUsername(resp.data);
			}
			getGroupUser();
		}
	}, [userGroup]);

	return (
		<GroupContext.Provider value={{ group, setGroup, username, setUsername }}>
			{children}
		</GroupContext.Provider>
	);
};

export const useGroup = () => useContext(GroupContext);
