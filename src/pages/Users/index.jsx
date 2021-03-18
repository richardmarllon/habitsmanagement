import UserList from "../../components/userList";
import { Fade } from "react-awesome-reveal";
import Header from "../../components/Header";

const Users = () => {
	return (
		<>
			<Header pageName="Usuários" />
			<Fade triggerOnce>
				<UserList />
			</Fade>
		</>
	);
};

export default Users;
