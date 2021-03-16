import { useUser } from "../../Providers/User";
import { useActivities } from "../../Providers/Activities";
import EditUserModal from "../../components/EditUserModal";
import AddHabitsModal from "../../components/AddHabitsModal";
import UpdateActivity from "../../components/UpdateActivity";
import CreateActivity from "../../components/CreateActivities";
import { useHistory } from "react-router";
import Header from "../../components/Header";

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
			<Header pageName="Home" />
			<h1>Home</h1>
			<button onClick={clearToken}>Sair</button>
			<EditUserModal />
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
			<button
				onClick={() => {
					history.push("/users");
				}}
			>
				ir para usuários
			</button>
		</div>
	);
};

export default Home;
