import { useHistory } from "react-router";
import UserList from "../../components/userList";

const Users = () => {
	const history = useHistory();
	return (
		<div>
			<button
				onClick={() => {
					history.push("/home");
				}}
			>
				voltar pra home
			</button>

			<UserList />
		</div>
	);
};

export default Users;
