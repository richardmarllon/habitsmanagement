import { useUser } from "../../Providers/User";
import { useActivities } from "../../Providers/Activities";
import AddHabitsModal from "../../components/AddHabitsModal";
import GoalForm from "../../components/GoalForm";
import UpdateActivity from "../../components/UpdateActivity";
import CreateActivity from "../../components/CreateActivities";

const Home = () => {
	const { setUserToken } = useUser();
	const { activities } = useActivities();

	const clearToken = () => {
		setUserToken("");
		localStorage.removeItem("token");
	};

	return (
		<div>
			<h1>Home</h1>
			<button onClick={clearToken}>Sair</button>
			<CreateActivity />
			<div>
				<ul>
					Lista de atividades:
					{activities.map((item) => {
						return (
							<li key={item.id}>
								{item.title} do grupo {item.group}
								<UpdateActivity activity={item} />
							</li>
						);
					})}
				</ul>
				<AddHabitsModal />
				<GoalForm />
			</div>
		</div>
	);
};

export default Home;
