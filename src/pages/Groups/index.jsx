
import GroupForm from "../../components/GroupForm ";
import { useHistory } from "react-router";
import EditCardGroup from "../../components/EditCardGrup";
import GroupEdit from "../../components/GroupEdit";
import GroupsList from "../../components/GroupsList";

const Groups = () => {
	const history = useHistory();

	return (
		<div>
			<GroupForm />
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
