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

const EditGoalModal = ({ goal, setChanger, changer }) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [achieved, setAchieved] = useState("");
	const { userToken } = useUser();
	const AuthConfig = { Authorization: `Bearer ${JSON.parse(userToken)}` };

	const schema = yup.object().shape({
		title: yup.string().required("Campo Obrigatório"),
		achieved: yup
			.boolean()
			.typeError("Campo obrigatório")
			.required("Campo obrigatório"),
	});

	const { register, handleSubmit, errors, control, reset } = useForm({
		resolver: yupResolver(schema),
	});

	const handleChange = (evt) => {
		setAchieved(evt.target.value);
	};

	const handleForm = async (data) => {
		let response = await habitsAPI.patch(`goals/${goal.id}/`, data, {
			headers: AuthConfig,
		});
		console.log(response, "RESPOSTA EDIÇÃO DE META DO GRUPO");
		reset();
		setIsModalVisible(false);
		setChanger(!changer);
	};

	const handleDelete = async () => {
		let response = await habitsAPI.delete(`goals/${goal.id}/`, {
			headers: AuthConfig,
		});
		console.log(response, "RESPOSTA EDIÇÃO DE META DO GRUPO");
		setIsModalVisible(false);
		setChanger(!changer);
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
				title={`Você está editando o habito: ${goal.title}`}
				visible={isModalVisible}
				onOk={handleSubmit(handleForm)}
				onCancel={handleCancel}
			>
				<form>
					<TextField
						fullWidth
						margin="normal"
						variant="outlined"
						label="Título da meta"
						inputRef={register}
						name="title"
						error={!!errors.title}
						helperText={errors.title?.message}
					/>

					<FormControl fullWidth margin="normal" variant="outlined">
						<InputLabel error={!!errors.achieved}>
							Já atingiu a meta?
						</InputLabel>
						<Controller
							name="achieved"
							control={control}
							defaultValue=""
							as={
								<Select
									value={achieved}
									onChange={handleChange}
									error={!!errors.achieved}
									text={errors.achieved?.message}
								>
									<MenuItem value={""}>
										<em>Escolha um</em>
									</MenuItem>
									<MenuItem value={true}>Sim</MenuItem>
									<MenuItem value={false}>Não</MenuItem>
								</Select>
							}
						></Controller>
						{<FormHelperText error>{errors.achieved?.message}</FormHelperText>}
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

export default EditGoalModal;
