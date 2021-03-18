import { useGroups } from "../../Providers/Groups";
import { habitsAPI } from "../../services/api";
import {
	StyledPagination,
	GroupsListContainer,
	LoadingDiv,
	SpinStyled,
} from "./style";
import GroupCard from "../GroupCard";
import { useEffect, useState } from "react";
import GroupForm from "../GroupForm ";
import GroupFormModal from "../GroupFormModal";
import { Fade } from "react-awesome-reveal";
import { LoadingOutlined } from "@ant-design/icons";

const GroupsList = () => {
	const [totalGroup, setTotalGroup] = useState(0);
	const { groups, setGroups, changer, setChanger } = useGroups();
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(true);
	const antIcon = <LoadingOutlined style={{ fontSize: 55 }} spin />;

	useEffect(() => {
		async function getGroupsList() {
			const response = await habitsAPI.get(`groups/?page=${page}`);

			setTotalGroup(response.data.count);
			setGroups(response.data.results);
			setLoading(false);
		}
		getGroupsList();
	}, [page, changer]);

	const handlePages = (value) => {
		setLoading(true);
		window.scrollTo({ top: 0, behavior: "smooth" });
		setPage(value);
	};

	return (
		<div>
			{loading && (
				<LoadingDiv>
					<SpinStyled indicator={antIcon} />
				</LoadingDiv>
			)}
			<GroupsListContainer>
				<GroupFormModal />
				<GroupForm />
				{groups.map((group) => {
					return (
						<Fade triggerOnce>
							<GroupCard
								group={group}
								key={group.id}
								setChanger={setChanger}
								changer={changer}
							/>
						</Fade>
					);
				})}
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
