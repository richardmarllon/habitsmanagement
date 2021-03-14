import { useEffect } from "react";
import { groups, useGroups } from "../../Providers/Groups";
import { habitsAPI } from "../../services/api";

const GroupsList = () => {
	const { groups, setGroups } = useGroups();

	useEffect(() => {
		async function getGroupsList() {
			const response = await habitsAPI.get(`groups/`);
			setGroups(response.data.results);
		}
		getGroupsList();
	}, []);
	console.log(groups);
	return (
		<div>
			{groups.map((group, index) => {
				return <div key={index}>{group.id}</div>;
			})}
		</div>
	);
};

export default GroupsList;
