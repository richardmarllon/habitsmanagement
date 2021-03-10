import { useHabits } from "../../Providers/Habits";

const Home = () => {
	const { personalHabits } = useHabits();

	return (
		<div>
			<h1>Home</h1>
			<ul>
				Lista de habitos pessoais:
				{personalHabits.map((item) => {
					return <li key={item.id}>{item.title}</li>;
				})}
			</ul>
		</div>
	);
};

export default Home;
