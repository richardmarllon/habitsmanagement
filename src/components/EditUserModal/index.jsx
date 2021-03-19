import React, { useState } from "react";
import { Modal } from "antd";
import { TextField, Button } from "@material-ui/core";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { habitsAPI } from "../../services/api";
import { useUser } from "../../Providers/User";
import { EditOutlined } from "@ant-design/icons";
import { StyledBtn } from "./style";

const EditUserModal = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const { user, userToken } = useUser();

	const schema = yup.object().shape({
		username: yup.string().required("Campo Obrigatório"),
	});

	const { register, handleSubmit, errors, reset } = useForm({
		resolver: yupResolver(schema),
	});

	const handleForm = async (data) => {
		const AuthConfig = { Authorization: `Bearer ${JSON.parse(userToken)}` };

		let response = await habitsAPI.patch(`users/${user}/`, data, {
			headers: AuthConfig,
		});
		console.log(response, "RESPOSTA CRIAÇÃO DE UPDATE NO USERNAME");
		reset();
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
			<StyledBtn type="primary" onClick={showModal} variant="outlined">
				<EditOutlined />
			</StyledBtn>
			<Modal
				title="Alterar nome de usuário"
				visible={isModalVisible}
				onOk={handleSubmit(handleForm)}
				onCancel={handleCancel}
			>
				<form>
					<TextField
						fullWidth
						margin="normal"
						variant="outlined"
						label="Novo nome de usuário"
						inputRef={register}
						name="username"
						error={!!errors.username}
						helperText={errors.username?.message}
					/>
				</form>
			</Modal>
		</>
	);
};

export default EditUserModal;
