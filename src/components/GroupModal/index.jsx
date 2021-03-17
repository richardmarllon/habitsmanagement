import { useState } from "react";
import { Modal } from "antd";
import { StyledButton } from "../GroupCard/style";
import {
	ActivitiesContainer,
	Figure,
	GoalListContainer,
	ActivityListContainer,
} from "./style";
import { useGroups } from "../../Providers/Groups";
import GoalForm from "../GoalForm";
import { useUser } from "../../Providers/User";
import { useGoals } from "../../Providers/Goals";
import { habitsAPI } from "../../services/api";
import GoalCard from "../GoalCard";
import UserDetailsModal from "../UserDetailsModal";
import { Collapse, Button } from "antd";
import { useActivities } from "../../Providers/Activities";
import CreateActivity from "../CreateActivity";
import UpdateActivity from "../UpdateActivity";

const GroupModal = ({ group }) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const { changer, setChanger } = useGroups();
	const { userGroup, userToken } = useUser();
	const { userActivities } = useActivities();
	const { userGoals } = useGoals();
	const { Panel } = Collapse;
	const AuthConfig = { Authorization: `Bearer ${JSON.parse(userToken)}` };

	const handleDelete = async (goal) => {
		let response = await habitsAPI.delete(`goals/${goal.id}/`, {
			headers: AuthConfig,
		});
		console.log(response, "RESPOSTA DELETAR META DO GRUPO");
		setChanger(!changer);
	};

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<>
			<StyledButton
				type="primary"
				onClick={showModal}
				variant="outlined"
				details
			>
				Detalhes
			</StyledButton>
			<Modal
				title="Detalhes do grupo"
				visible={isModalVisible}
				onCancel={handleCancel}
				onOk={() => setIsModalVisible(false)}
				footer={[
					<Button type="primary" onClick={handleCancel}>
						Fechar
					</Button>,
				]}
			>
				<h1>{group.name}</h1>
				<h2>{group.category}</h2>
				<p>{group.description}</p>
				<div>
					{group.users.map((user, index) => (
						<Figure key={index}>
							<UserDetailsModal user={user} groupsPage />
							<figcaption>{user.username}</figcaption>
						</Figure>
					))}
				</div>
				{userGroup === group.id && <p>Lista de metas pessoais:</p>}
				<GoalListContainer>
					{userGroup === group.id &&
						userGoals &&
						userGoals.map((goal, index) => (
							<GoalCard
								key={index}
								goal={goal}
								handleDelete={handleDelete}
								changer={changer}
								setChanger={setChanger}
							/>
						))}
				</GoalListContainer>
				{userGroup === group.id && (
					<Collapse accordion={true}>
						<Panel header="Criar metas ">
							<GoalForm
								changer={changer}
								setChanger={setChanger}
								id={group.id}
							/>
						</Panel>
					</Collapse>
				)}
				{userGroup === group.id && (
					<ActivityListContainer>
						Lista de atividades:
						{userActivities.map((activity) => {
							return (
								<ActivitiesContainer key={activity.id}>
									Atividade: {activity.title}
									<UpdateActivity activity={activity} />
								</ActivitiesContainer>
							);
						})}
						<CreateActivity />
					</ActivityListContainer>
				)}
			</Modal>
		</>
	);
};

export default GroupModal;
