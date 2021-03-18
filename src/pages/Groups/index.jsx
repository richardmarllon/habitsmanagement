import { useHistory } from "react-router";
import GroupsList from "../../components/GroupsList";
import PageUp from "../../components/PageUp";
import { Fade } from "react-awesome-reveal";

const Groups = () => {
	const history = useHistory();

	return (
		<div>
			<Fade triggerOnce>
				<GroupsList />
			</Fade>
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
