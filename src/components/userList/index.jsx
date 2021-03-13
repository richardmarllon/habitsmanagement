import { useEffect, useState } from "react";
import { useUsers } from "../../Providers/Users";
import { habitsAPI } from "../../services/api";
import UserCard from "../UserCard";
import { UsersContainer } from "./style";

const UserList = () => {
	const { setUsers, users } = useUsers();
	const [page, setPage] = useState(
		"https://kabit-api.herokuapp.com/users/?page=1"
	);
	const [nextPage, setNextPage] = useState(null);
	const [previousPage, setPreviousPage] = useState(null);
	useEffect(() => {
		async function getUserList() {
			const response = await habitsAPI.get(`${page}`);
			if (response.data.next) {
				setNextPage(response.data.next);
			}
			if (response.data.previous) {
				setPreviousPage(response.data.previous);
			}
			setUsers(response.data.results);
		}
		getUserList();
	}, [page]);

	const handleNext = () => {
		if (nextPage) {
			setPage(nextPage);
		}
	};

	const handlePrevious = () => {
		if (previousPage) {
			setPage(previousPage);
		}
	};

	return (
		<div>
			<h1>Lista de usuários:</h1>
			<button onClick={handlePrevious}> Anterior </button>
			<button onClick={handleNext}> Proxima </button>
			<UsersContainer>
				{users.map((user) => {
					return <UserCard user={user} />;
				})}
			</UsersContainer>
		</div>
	);
};

export default UserList;
