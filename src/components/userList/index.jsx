import { useEffect } from "react";
import { useUsers } from "../../Providers/Users";
import { habitsAPI } from "../../services/api";

const UserList = () => {
	const { setUsers } = useUsers();
	useEffect(() => {
		async function getUserList() {
			const response = await habitsAPI.get(`users/`);
			setUsers(response.data.results);
		}
		getUserList();
	}, []);

	return <div>UserList</div>;
};

export default UserList;
