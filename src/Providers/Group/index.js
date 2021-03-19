import { habitsAPI } from "../../services/api";
import { useUser } from "../../Providers/User";
import { useGroups } from "../Groups";

const { createContext, useContext, useState, useEffect } = require("react");

const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
	const [group, setGroup] = useState(null);
	const [usernameChanger, setUsernameChanger] = useState(false);
	const {
		userGroup,
		user,
		setChangeGroupSignal,
		changeGroupSignal,
		userToken,
	} = useUser();
	const { changer } = useGroups();

	useEffect(() => {
		if (userGroup) {
			async function getGroupUser() {
				const response = await habitsAPI.get(`groups/${userGroup}/`);

				setGroup(response.data);
				setChangeGroupSignal(!changeGroupSignal);
			}
			getGroupUser();
		}
	}, [userGroup, changer, user, userToken, usernameChanger]);

	return (
		<GroupContext.Provider
			value={{
				group,
				setGroup,
				setUsernameChanger,
				usernameChanger,
			}}
		>
			{children}
		</GroupContext.Provider>
	);
};

export const useGroup = () => useContext(GroupContext);
