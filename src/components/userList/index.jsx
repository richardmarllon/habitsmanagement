import { Button } from "antd";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useUsers } from "../../Providers/Users";
import { habitsAPI } from "../../services/api";
import PageUp from "../PageUp";
import UserCard from "../UserCard";
import { StyledPagination, UsersContainer } from "./style";
import { Fade } from "react-awesome-reveal";

const UserList = () => {
	const history = useHistory();
	const { setUsers, users } = useUsers();
	const [page, setPage] = useState(1);
	const [totalUsers, setTotalUsers] = useState(0);

	useEffect(() => {
		async function getUserList() {
			const response = await habitsAPI.get(`users/?page=${page}`);

			setUsers(response.data.results);
			setTotalUsers(response.data.count);
		}
		getUserList();
	}, [page]);

	const handlePages = (value) => {
		setPage(value);
	};

	return (
		<>
			<Button
				onClick={() => {
					history.push("/home");
				}}
			>
				HOME
			</Button>
			<UsersContainer>
				{users.map((user) => {
					return <UserCard user={user} />;
				})}
			</UsersContainer>
			<StyledPagination
				hideOnSinglePage={true}
				total={totalUsers}
				showSizeChanger={false}
				defaultPageSize={15}
				onChange={(valor1) => {
					handlePages(valor1);
				}}
			/>

			<PageUp />
		</>
	);
};

export default UserList;
