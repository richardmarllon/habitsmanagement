import { useActivities } from "../../Providers/Activities";

const Home = () => {
	const { activities } = useActivities();

	return (
		<div>
			<h1>Home</h1>
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
			</div>
		</div>
	);
};

export default Home;
