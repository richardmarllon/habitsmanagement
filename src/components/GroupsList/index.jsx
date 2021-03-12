import { useEffect } from "react";
import { useHistory } from "react-router";
import { useGroups } from "../../Providers/Groups";
import { habitsAPI } from "../../services/api";
import GroupCard from "../GroupCard";

const GroupsList = () => {
	const { groups, setGroups } = useGroups();
	const history = useHistory();

	useEffect(() => {
		async function getGroupsList() {
			const response = await habitsAPI.get(`groups/`);
			setGroups(response.data.results);
		}
		getGroupsList();
	}, []);

	return (
		<div>
			<h2>GroupList</h2>
			<button
				onClick={() => {
					history.push("/home");
				}}
			>
				voltar para home
			</button>

			{groups.map((group) => {
				return <GroupCard group={group} key={group.id} />;
			})}
		</div>
	);
};

export default GroupsList;
