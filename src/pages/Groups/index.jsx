import GoalForm from "../../components/GoalForm";
import { useHistory } from "react-router";
import GroupsList from "../../components/GroupsList";
import { useGoals } from "../../Providers/Goals";
import EditHabitsModal from "../../components/EditHabitsModal";
import { useUser } from "../../Providers/User";
import { Button } from "@material-ui/core";
import { DeleteOutlined } from "@ant-design/icons";
import { habitsAPI } from "../../services/api";
import { useEffect } from "react";
import { useGroups } from "../../Providers/Groups";
import EditGoalModal from "../../components/EditGoalModal";

const Groups = () => {
	const history = useHistory();
	const { userGoals } = useGoals();
	const { userToken } = useUser();
	const { changer, setChanger } = useGroups();
	const AuthConfig = { Authorization: `Bearer ${JSON.parse(userToken)}` };

	const handleDelete = async (goal) => {
		let response = await habitsAPI.delete(`goals/${goal.id}/`, {
			headers: AuthConfig,
		});
		console.log(response, "RESPOSTA DELETAR META DO GRUPO");
		setChanger(!changer);
	};

	useEffect(() => {
		console.log(userGoals);
	}, [userGoals]);

	return (
		<div>
			<GroupsList />
			<h1>Goals</h1>
			<div>
				<h3>Lista de metas pessoais:</h3>
				{userGoals &&
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
			</div>
			<div>-------</div>
			<GoalForm changer={changer} setChanger={setChanger} />
			<button
				onClick={() => {
					history.push("/home");
				}}
			>
				Voltar para home
			</button>
		</div>
	);
};

export default Groups;
