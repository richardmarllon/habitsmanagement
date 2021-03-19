import EditHabitsModal from "../../components/EditHabitsModal";
import { useHabits } from "../../Providers/Habits";
import { useUser } from "../../Providers/User";
import { DeleteOutlined } from "@ant-design/icons";
import { habitsAPI } from "../../services/api";
import {
	ButtonContainer,
	ContentDiv,
	DeleteBtn,
	HabitContainer,
	TitleHabit,
} from "./style";

const PersonalHabitsList = () => {
	const { personalHabits, update, setUpdate } = useHabits();
	const { userToken } = useUser();
	const AuthConfig = { Authorization: `Bearer ${JSON.parse(userToken)}` };

	const handleDelete = async (habit) => {
		let response = await habitsAPI.delete(`habits/${habit.id}/`, {
			headers: AuthConfig,
		});
		setUpdate(!update);
		console.log(response, "RESPOSTA DELETAR HABITO PESSOAL");
	};

	return (
		<div>
			{personalHabits.map((habit) => {
				return (
					<HabitContainer>
						<TitleHabit>{habit.title}</TitleHabit>
						<ContentDiv>realizado {habit.how_much_achieved}x </ContentDiv>
						<ContentDiv>Dificuldade: {habit.difficulty}</ContentDiv>
						<ButtonContainer>
							<EditHabitsModal habit={habit} />
							<DeleteBtn
								variant="outlined"
								color="secondary"
								onClick={() => {
									handleDelete(habit);
								}}
							>
								<DeleteOutlined />
							</DeleteBtn>
						</ButtonContainer>
					</HabitContainer>
				);
			})}
		</div>
	);
};

export default PersonalHabitsList;
