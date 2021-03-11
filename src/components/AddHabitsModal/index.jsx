import React, { useState } from "react";
import { Modal, Button } from "antd";
import { TextField, InputLabel, NativeSelect } from "@material-ui/core";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { habitsAPI } from "../../services/api";

const AddHabitsModal = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const schema = yup.object().shape({
		title: yup.string().required("Campo Obrigatório"),
		category: yup.string().required("Campo Obrigatório"),
		frequency: yup.string().required("Campo Obrigatório"),
		difficulty: yup
			.string()
			.oneOf(["fácil", "mediano", "difícil"])
			.required("Campo obrigatório"),
	});

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

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
			<Button type="primary" onClick={showModal}>
				Adicionar hábito.
			</Button>
			<Modal
				title="Criar um novo hábito:"
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<form>
					<TextField
						variant="outlined"
						label="Titulo"
						inputRef={register}
						name={"title"}
					/>
					<TextField
						variant="outlined"
						label="Categoria"
						inputRef={register}
						name={"category"}
					/>
					<TextField
						variant="outlined"
						label="Frequência"
						inputRef={register}
						name={"frequency"}
					/>
					<InputLabel htmlFor="select">Dificuldade</InputLabel>
					<NativeSelect id="select" variant="outlined">
						<option value={"fácil"} inputRef={register} name={"difficulty"}>
							Fácil
						</option>
						<option value={"mediano"} inputRef={register} name={"difficulty"}>
							Mediano
						</option>
						<option value={"difícil"} inputRef={register} name={"difficulty"}>
							Difícil
						</option>
					</NativeSelect>
				</form>
			</Modal>
		</>
	);
};

export default AddHabitsModal;
