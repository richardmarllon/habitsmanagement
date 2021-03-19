import GroupsList from "../../components/GroupsList";
import PageUp from "../../components/PageUp";
import { Fade } from "react-awesome-reveal";
import Header from "../../components/Header";

const Groups = () => {
	return (
		<div>
			<Header pageName="Groups" />
			<Fade triggerOnce>
				<GroupsList />
			</Fade>
			<PageUp />
		</div>
	);
};

export default Groups;
