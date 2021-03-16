import { useHistory } from "react-router";
import EditHabitsModal from "../../components/EditHabitsModal";
import { useHabits } from "../../Providers/Habits";
import { useUser } from "../../Providers/User";
import { Button } from "@material-ui/core";
import { DeleteOutlined } from "@ant-design/icons";
import { habitsAPI } from "../../services/api";
import AddHabitsModal from "../../components/AddHabitsModal";

const Habits = () => {
	const history = useHistory();
	const { personalHabits } = useHabits();
	const { userToken } = useUser();
	const AuthConfig = { Authorization: `Bearer ${JSON.parse(userToken)}` };

	const handleDelete = async (habit) => {
		let response = await habitsAPI.delete(`habits/${habit.id}/`, {
			headers: AuthConfig,
		});
		console.log(response, "RESPOSTA DELETAR HABITO PESSOAL");
	};

	return (
		<div>
			<h1>Habits</h1>
			<div>
				<h3>Lista de habitos pessoais:</h3>
				{personalHabits.map((habit) => {
					return (
						<li>
							<span>nome: "{habit.title}" </span>
							<span>vezes realizado: {habit.how_much_achieved} </span>
							<span>nível de dificuldade: {habit.difficulty}</span>
							<span> ----- </span>
							<EditHabitsModal habit={habit} />
							<Button
								variant="outlined"
								color="secondary"
								onClick={() => {
									handleDelete(habit);
								}}
							>
								<DeleteOutlined />
							</Button>
						</li>
					);
				})}
			</div>
			<div>-------</div>
			<button
				onClick={() => {
					history.push("/home");
				}}
			>
				Voltar para home
			</button>
			<AddHabitsModal />
		</div>
	);
};

export default Habits;
