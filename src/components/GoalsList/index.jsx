import { useEffect } from "react";
import { useGoals } from "../../Providers/Goals";
import { habitsAPI } from "../../services/api";

const GoalsList = () => {
	const { goals, setGoals } = useGoals();

	useEffect(() => {
		async function getGoals() {
			const response = await habitsAPI.get(`/goals/`);
			setGoals(response.data.results);
		}
		getGoals();
	}, []);

	return (
		<>
			<div>
				{goals.map((goal) => {
					return (
						<li>
							<div>Nome: {goal.title}</div>
							<div>Dificuldade: {goal.difficulty}</div>
							<div>Progresso: {goal.how_much_achieved} dias</div>
						</li>
					);
				})}
			</div>
		</>
	);
};

export default GoalsList;
