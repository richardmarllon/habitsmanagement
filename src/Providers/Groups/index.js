import { habitsAPI } from "../../services/api";
import { useUser } from "../User";

const { createContext, useContext, useState, useEffect } = require("react");

const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
	const [userGroup, setUserGroup] = useState([]);
	const [groups, setGroups] = useState([]);
	const [changer, setChanger] = useState(true);
	const { userGroupID } = useUser();

	useEffect(() => {
		async function getUserGroup() {
			if (userGroupID) {
				const group = await habitsAPI.get(`groups/${userGroupID}/`);
				setUserGroup(group.data);
			}
		}
		getUserGroup();
	}, [userGroupID, changer]);

	return (
		<GroupsContext.Provider
			value={{ groups, setGroups, userGroup, setChanger, changer }}
		>
			{children}
		</GroupsContext.Provider>
	);
};

export const useGroups = () => useContext(GroupsContext);
