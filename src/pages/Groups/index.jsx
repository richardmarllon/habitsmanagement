import { useHistory } from "react-router";
import GroupsList from "../../components/GroupsList";

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
		</div>
	);
};

export default Groups;
