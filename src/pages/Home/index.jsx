import { useUser } from "../../Providers/User";
import { useActivities } from "../../Providers/Activities";
import AddHabitsModal from "../../components/AddHabitsModal";
import { useHistory } from "react-router";

const Home = () => {
	const { setUserToken } = useUser();
	const { activities } = useActivities();
	const history = useHistory();

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
				<AddHabitsModal />
			</div>
			<button
				onClick={() => {
					history.push("/habits");
				}}
			>
				ir para habitos
			</button>
			<button
				onClick={() => {
					history.push("/groups");
				}}
			>
				ir para grupos
			</button>
		</div>
	);
};

export default Home;
