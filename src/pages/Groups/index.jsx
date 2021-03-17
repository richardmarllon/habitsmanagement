import { useHistory } from "react-router";
import GroupsList from "../../components/GroupsList";
import PageUp from "../../components/PageUp";

const Groups = () => {
	const history = useHistory();

	return (
		<div>
			<GroupsList />
			<button
				onClick={() => {
					history.push("/home");
				}}
			>
				Voltar para home
			</button>
			<PageUp />
		</div>
	);
};

export default Groups;
