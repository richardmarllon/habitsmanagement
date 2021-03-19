import EditGoalModal from "../../components/EditGoalModal";
import { Button } from "@material-ui/core";
import { DeleteOutlined } from "@ant-design/icons";
import { GoalContainer, AchievedText } from "./style";

const GoalCard = ({ goal, changer, setChanger, handleDelete }) => {
	return (
		<GoalContainer>
			<h4>Meta: {goal.title} </h4>
			<h5>Vezes realizado: {goal.how_much_achieved} </h5>
			<h5>Nível de dificuldade: {goal.difficulty} </h5>
			<h5>
				Já alcançou?
				<AchievedText achieved={goal.achieved}>
					{goal.achieved ? " Sim" : " Não"}
				</AchievedText>
			</h5>
			<EditGoalModal goal={goal} changer={changer} setChanger={setChanger} />
			<Button
				variant="outlined"
				color="secondary"
				onClick={() => {
					handleDelete(goal);
				}}
			>
				<DeleteOutlined />
			</Button>
		</GoalContainer>
	);
};

export default GoalCard;
