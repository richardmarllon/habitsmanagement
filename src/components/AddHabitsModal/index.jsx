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

const AddHabitsModal = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [difficulty, setDifficulty] = useState("");
	const { user, userToken } = useUser();

	const schema = yup.object().shape({
		title: yup.string().required("Campo Obrigatório"),
		category: yup.string().required("Campo Obrigatório"),
		frequency: yup.string().required("Campo Obrigatório"),
		difficulty: yup.string().required("Campo obrigatório"),
	});

	const { register, handleSubmit, errors, control } = useForm({
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
	};

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<>
			<Button type="primary" onClick={showModal} variant="outlined">
				Adicionar hábito.
			</Button>
			<Modal
				title="Criar um novo hábito:"
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<form onSubmit={handleSubmit(handleForm)}>
					<TextField
						variant="outlined"
						label="Titulo"
						inputRef={register}
						name="title"
						error={!!errors.title}
						helperText={errors.title?.message}
					/>
					<TextField
						variant="outlined"
						label="Categoria"
						inputRef={register}
						name="category"
						error={!!errors.category}
						helperText={errors.category?.message}
					/>
					<TextField
						variant="outlined"
						label="Frequência"
						inputRef={register}
						name="frequency"
						error={!!errors.frequency}
						helperText={errors.frequency?.message}
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
						{
							<FormHelperText error>
								{errors.difficulty?.message}
							</FormHelperText>
						}
					</FormControl>

					<Button type="submit" variant="outlined">
						Criar
					</Button>
				</form>
			</Modal>
		</>
	);
};

export default AddHabitsModal;
