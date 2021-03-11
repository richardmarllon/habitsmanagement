import { useUser } from "../../Providers/User";
import { useActivities } from "../../Providers/Activities";
import GoalForm from "../../components/GoalForm";

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
			<div>
				<ul>
					Lista de atividades:
					{activities.map((item) => {
						return (
							<li key={item.id}>
								{item.title} do grupo {item.group}
							</li>
						);
					})}
				</ul>
				<GoalForm />
			</div>
		</div>
	);
};

export default Home;
