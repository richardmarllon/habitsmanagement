import { useGroups } from "../../Providers/Groups";
import { habitsAPI } from "../../services/api";
import { StyledPagination, GroupsListContainer } from "./style";
import GroupCard from "../GroupCard";
import { useEffect, useState } from "react";
import GroupForm from "../GroupForm ";
import GroupFormModal from "../GroupFormModal";

const GroupsList = () => {
	const [totalGroup, setTotalGroup] = useState(0);
	const { groups, setGroups } = useGroups();
	const [page, setPage] = useState(1);
	const [changer, setChanger] = useState(false);

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
			<GroupsListContainer>
				<GroupFormModal />
				<GroupForm />
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
