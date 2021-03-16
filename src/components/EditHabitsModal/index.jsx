import React, { useState } from "react";
import { Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

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

const EditHabitsModal = ({ habit }) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [difficulty, setDifficulty] = useState("");
	const { userToken } = useUser();
	const AuthConfig = { Authorization: `Bearer ${JSON.parse(userToken)}` };

	const schema = yup.object().shape({
		how_much_achieved: yup
			.number("insira um valor")
			.required("Campo Obrigatório")
			.min(0, "Insira um número maior que 0."),
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
		let response = await habitsAPI.patch(`habits/${habit.id}/`, data, {
			headers: AuthConfig,
		});
		console.log(response, "RESPOSTA EDIÇÃO DE HABITO PESSOAL");
		reset();
		setIsModalVisible(false);
	};

	const handleDelete = async () => {
		let response = await habitsAPI.delete(`habits/${habit.id}/`, {
			headers: AuthConfig,
		});
		console.log(response, "RESPOSTA EDIÇÃO DE HABITO PESSOAL");
		setIsModalVisible(false);
	};

	const showModal = () => {
		reset();
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		reset();
		setIsModalVisible(false);
	};

	return (
		<>
			<Button type="primary" onClick={showModal} variant="outlined">
				<EditOutlined />
			</Button>
			<Modal
				title={`Você está editando o habito: ${habit.title}`}
				visible={isModalVisible}
				onOk={handleSubmit(handleForm)}
				onCancel={handleCancel}
			>
				<form>
					<TextField
						fullWidth
						margin="normal"
						variant="outlined"
						label="Vezes realizado"
						type="number"
						inputRef={register}
						name="how_much_achieved"
						error={!!errors.how_much_achieved}
						helperText={errors.how_much_achieved?.message}
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
				<Button
					variant="outlined"
					color="secondary"
					startIcon={<DeleteOutlined />}
					onClick={handleDelete}
				>
					deletar
				</Button>
			</Modal>
		</>
	);
};

export default EditHabitsModal;
