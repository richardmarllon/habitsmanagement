import { Button } from "antd";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useUsers } from "../../Providers/Users";
import { habitsAPI } from "../../services/api";
import PageUp from "../PageUp";
import UserCard from "../UserCard";
import {
	LoadingDiv,
	SpinStyled,
	StyledPagination,
	UsersContainer,
} from "./style";
import { Fade } from "react-awesome-reveal";
import { LoadingOutlined } from "@ant-design/icons";

const UserList = () => {
	const history = useHistory();
	const { setUsers, users } = useUsers();
	const [page, setPage] = useState(1);
	const [totalUsers, setTotalUsers] = useState(0);
	const [loading, setLoading] = useState(true);
	const antIcon = <LoadingOutlined style={{ fontSize: 55 }} spin />;

	useEffect(() => {
		async function getUserList() {
			const response = await habitsAPI.get(`users/?page=${page}`);

			setUsers(response.data.results);
			setTotalUsers(response.data.count);
			setLoading(false);
		}
		getUserList();
	}, [page]);

	const handlePages = (value) => {
		setLoading(true);
		setPage(value);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<>
			{loading && (
				<LoadingDiv>
					<SpinStyled indicator={antIcon} />
				</LoadingDiv>
			)}
			<Button
				onClick={() => {
					history.push("/home");
				}}
			>
				HOME
			</Button>
			<UsersContainer>
				{users.map((user) => {
					return (
						<Fade>
							<UserCard user={user} />
						</Fade>
					);
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
