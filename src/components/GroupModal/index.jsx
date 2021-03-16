import { useState } from "react";
import { Modal } from "antd";
import { StyledButton } from "../GroupCard/style";
import { Figure } from "./style";
import { useGroups } from "../../Providers/Groups";
import GoalForm from "../GoalForm";
import { useUser } from "../../Providers/User";
import { useGoals } from "../../Providers/Goals";
import { Button } from "@material-ui/core";
import { DeleteOutlined } from "@ant-design/icons";
import { habitsAPI } from "../../services/api";
import EditGoalModal from "../../components/EditGoalModal";

const GroupModal = ({ group }) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const { changer, setChanger } = useGroups();
	const { userGroup, userToken } = useUser();
	const { userGoals } = useGoals();
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
			>
				<h1>{group.name}</h1>
				<h2>{group.category}</h2>
				<p>{group.description}</p>
				<div>
					{group.users.map((user, index) => (
						<Figure>
							<img
								alt="user avatar"
								key={index}
								src={
									user.id % 2 === 0
										? "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
										: "https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png"
								}
							/>
							<figcaption>{user.username}</figcaption>
						</Figure>
					))}
				</div>
				{userGroup === group.id && <h3>Lista de metas pessoais:</h3> &&
					userGoals &&
					userGoals.map((goal, index) => {
						return (
							<li key={index}>
								<span>nome: "{goal.title}" </span>
								<span>vezes realizado: {goal.how_much_achieved} </span>
								<span>nível de dificuldade: {goal.difficulty} </span>
								<span>já alcançou? {goal.achieved ? "Sim" : "Não"}</span>
								<span> ----- </span>
								<EditGoalModal
									goal={goal}
									changer={changer}
									setChanger={setChanger}
								/>
								<Button
									variant="outlined"
									color="secondary"
									onClick={() => {
										handleDelete(goal);
									}}
								>
									<DeleteOutlined />
								</Button>
							</li>
						);
					})}
				{userGroup === group.id && (
					<GoalForm changer={changer} setChanger={setChanger} id={group.id} />
				)}
			</Modal>
		</>
	);
};

export default GroupModal;
