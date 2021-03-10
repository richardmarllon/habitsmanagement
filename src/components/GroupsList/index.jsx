import { useEffect } from "react";
import { useGroups } from "../../Providers/Groups";
import { habitsAPI } from "../../services/api";

export const GroupsList = () => {
	const { setGroups } = useGroups();

	useEffect(() => {
		async function getGroupsList() {
			const response = await habitsAPI.get(`groups/`);
			setGroups(response);
		}
		getGroupsList();
	}, []);

	return <div></div>;
};
