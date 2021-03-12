import { habitsAPI } from "../../services/api";
import { useUser } from "../User";

const { createContext, useContext, useState, useEffect } = require("react");

const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
	const [userGroupData, setUserGroupData] = useState([]);
	const [groups, setGroups] = useState([]);
	const [changer, setChanger] = useState(true);
	const { userGroup } = useUser();

	useEffect(() => {
		async function getUserGroup() {
			if (userGroup) {
				const group = await habitsAPI.get(`groups/${userGroup}/`);
				setUserGroupData(group.data);
			}
		}
		getUserGroup();
	}, [userGroup, changer]);

	return (
		<GroupsContext.Provider
			value={{ groups, setGroups, userGroupData, setChanger, changer }}
		>
			{children}
		</GroupsContext.Provider>
	);
};

export const useGroups = () => useContext(GroupsContext);
