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

const GoalForm = () => {
	const { userToken } = useUser();
	const [difficulty, setDifficulty] = useState("");

	const schema = yup.object().shape({
		title: yup.string().required("Campo Obrigatório"),
		difficulty: yup.string().required("Campo Obrigatório"),
		how_much_achieved: yup
			.number()
			.typeError("Escreva um número")
			.required("Campo Obrigatório"),
		group: yup
			.number()
			.typeError("Escreva um número")
			.required("Campo Obrigatório"),
	});

	const { register, handleSubmit, errors, control } = useForm({
		resolver: yupResolver(schema),
	});

	const handleForm = (data) => {
		async function sendData() {
			const response = await habitsAPI.post("goals/", data, {
				headers: {
					Authorization: `Bearer ${JSON.parse(userToken)}`,
				},
			});
			console.log(response);
		}
		sendData();
	};

	const handleChange = (e) => {
		setDifficulty(e.target.value);
	};

	return (
		<>
			<form onSubmit={handleSubmit(handleForm)}>
				<h1>Criar meta</h1>
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
				<TextField
					margin="normal"
					variant="outlined"
					label="Número do grupo"
					name="group"
					size="small"
					color="primary"
					inputRef={register}
					error={!!errors.group}
					helperText={errors.group?.message}
				/>
				<Button type="onSubmit">Criar meta</Button>
			</form>
			<></>
		</>
	);
};

export default GoalForm;
