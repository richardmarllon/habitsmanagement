import React, { useState } from "react";
import { Modal } from "antd";
import {
	TextField,
	InputLabel,
	Select,
	Button,
	FormControl,
	MenuItem,
	FormHelperText,
} from "@material-ui/core";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { habitsAPI } from "../../services/api";
import { useUser } from "../../Providers/User";
import { StyledButton } from "./styles";
import { useHabits } from "../../Providers/Habits";

const AddHabitsModal = () => {
	const { update, setUpdate } = useHabits();
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [difficulty, setDifficulty] = useState("");
	const { user, userToken } = useUser();

	const schema = yup.object().shape({
		title: yup.string().required("Campo Obrigatório"),
		category: yup.string().required("Campo Obrigatório"),
		frequency: yup.string().required("Campo Obrigatório"),
		difficulty: yup.string().required("Campo obrigatório"),
	});

	const { register, handleSubmit, errors, control, reset } = useForm({
		resolver: yupResolver(schema),
	});

	const handleChange = (evt) => {
		setDifficulty(evt.target.value);
	};

	const handleForm = async (data) => {
		const AuthConfig = { Authorization: `Bearer ${JSON.parse(userToken)}` };
		data.acheved = false;
		data.how_much_achieved = 0;
		data.user = user;

		let response = await habitsAPI.post(`habits/`, data, {
			headers: AuthConfig,
		});
		console.log(response, "RESPOSTA CRIAÇÃO DE HABITO NO USUÁRIO");
		reset();
		setUpdate(!update);
		setIsModalVisible(false);
	};

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<>
			<StyledButton type="primary" onClick={showModal} variant="outlined">
				Adicionar hábito
			</StyledButton>
			<Modal
				title="Criar um novo hábito:"
				visible={isModalVisible}
				onOk={handleSubmit(handleForm)}
				onCancel={handleCancel}
			>
				<form>
					<TextField
						fullWidth
						margin="normal"
						variant="outlined"
						label="Titulo"
						inputRef={register}
						name="title"
						error={!!errors.title}
						helperText={errors.title?.message}
					/>
					<TextField
						fullWidth
						variant="outlined"
						label="Categoria"
						margin="normal"
						inputRef={register}
						name="category"
						error={!!errors.category}
						helperText={errors.category?.message}
					/>
					<TextField
						fullWidth
						margin="normal"
						variant="outlined"
						label="Frequência"
						inputRef={register}
						name="frequency"
						error={!!errors.frequency}
						helperText={errors.frequency?.message}
					/>

					<FormControl fullWidth margin="normal" variant="outlined">
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
						{
							<FormHelperText error>
								{errors.difficulty?.message}
							</FormHelperText>
						}
					</FormControl>
				</form>
			</Modal>
		</>
	);
};

export default AddHabitsModal;
