import { useGroups } from "../../Providers/Groups";
import { habitsAPI } from "../../services/api";
import { StyledPagination, GroupsListContainer } from "./style";
import { useHistory } from "react-router";
import GroupCard from "../GroupCard";
import { useEffect, useState } from "react";

const GroupsList = () => {
	const [totalGroup, setTotalGroup] = useState(0);
	const { groups, setGroups } = useGroups();
	const [page, setPage] = useState(1);
	const [changer, setChanger] = useState(false);
	const history = useHistory();

	useEffect(() => {
		async function getGroupsList() {
			const response = await habitsAPI.get(`groups/?page=${page}`);
			setTotalGroup(response.data.count);
			setGroups(response.data.results);
		}
		getGroupsList();
	}, [page, changer]);

	const handlePages = (value) => {
		setPage(value);
	};

	return (
		<div>
			<h2>GroupList</h2>
			<button
				onClick={() => {
					history.push("/home");
				}}
			>
				voltar para home
			</button>

			<GroupsListContainer>
				{groups.map((group) => (
					<GroupCard
						group={group}
						key={group.id}
						setChanger={setChanger}
						changer={changer}
					/>
				))}
			</GroupsListContainer>
			<StyledPagination
				hideOnSinglePage={true}
				total={totalGroup}
				showSizeChanger={false}
				defaultPageSize={15}
				onChange={(valor1) => {
					handlePages(valor1);
				}}
			/>
		</div>
	);
};

export default GroupsList;
