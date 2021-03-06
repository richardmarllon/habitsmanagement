import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
	Button,
	TextField,
	FormControl,
	Select,
	InputLabel,
	MenuItem,
	FormHelperText,
} from "@material-ui/core/";
import { habitsAPI } from "../../services/api";
import { useUser } from "../../Providers/User";
import { useState } from "react";
import { StyledGoalForm } from "./style";

const GoalForm = ({ changer, setChanger, id }) => {
	const { userToken } = useUser();
	const [difficulty, setDifficulty] = useState("");
	const AuthConfig = { Authorization: `Bearer ${JSON.parse(userToken)}` };

	const schema = yup.object().shape({
		title: yup.string().required("Campo Obrigatório"),
		difficulty: yup.string().required("Campo Obrigatório"),
		how_much_achieved: yup
			.number()
			.typeError("Escreva um número")
			.required("Campo Obrigatório"),
	});

	const { register, handleSubmit, errors, control, reset } = useForm({
		resolver: yupResolver(schema),
	});

	const handleForm = (data) => {
		data.group = id;
		async function sendData() {
			const response = await habitsAPI.post("goals/", data, {
				headers: {
					Authorization: `Bearer ${JSON.parse(userToken)}`,
				},
			});
			setChanger(!changer);
			reset();
		}
		sendData();
	};

	const handleChange = (e) => {
		setDifficulty(e.target.value);
	};

	return (
		<>
			<StyledGoalForm onSubmit={handleSubmit(handleForm)}>
				<TextField
					margin="normal"
					variant="outlined"
					label="Nome da Meta"
					name="title"
					size="small"
					color="primary"
					inputRef={register}
					error={!!errors.title}
					helperText={errors.title?.message}
				/>
				<FormControl>
					<InputLabel error={!!errors.difficulty}>Dificuldade</InputLabel>

					<Controller
						name="difficulty"
						control={control}
						defaultValue=""
						as={
							<Select
								value={difficulty}
								onChange={handleChange}
								error={!!errors.difficulty}
								text={errors.difficulty?.message}
							>
								<MenuItem value={""}>
									<em>Nenhum</em>
								</MenuItem>
								<MenuItem value={"Fácil"}>Fácil</MenuItem>
								<MenuItem value={"Médio"}>Médio</MenuItem>
								<MenuItem value={"Difícil"}>Difícil</MenuItem>
							</Select>
						}
					></Controller>
					{<FormHelperText error>{errors.difficulty?.message}</FormHelperText>}
				</FormControl>
				<TextField
					margin="normal"
					variant="outlined"
					label="Quantos dias já atingiu a meta"
					name="how_much_achieved"
					size="small"
					color="primary"
					inputRef={register}
					error={!!errors.how_much_achieved}
					helperText={errors.how_much_achieved?.message}
				/>
				<Button type="onSubmit" variant="outlined">
					Criar meta
				</Button>
			</StyledGoalForm>
		</>
	);
};

export default GoalForm;
