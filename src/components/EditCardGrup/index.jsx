import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { habitsAPI } from "../../services/api";
import {EditOutlined} from "@ant-design/icons"
import { TextField, Button } from "@material-ui/core";
import { Modal } from "antd";
import {useUser} from "../../Providers/User"
import {useGroups} from "../../Providers/Groups"
import React, { useState } from "react";


const EditCardGroup = ({group}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { userGroup, userToken, setUserGroup } = useUser();
    
    const schema = yup.object().shape({
		name: yup.string(),
        description : yup.string(),
	});

	const { register, handleSubmit, errors, reset } = useForm({
		resolver: yupResolver(schema),
	});

	const handleForm = async (data) => {
		const AuthConfig = { Authorization: `Bearer ${JSON.parse(userToken)}` };

		let response = await habitsAPI.patch(`groups/${userGroup}/`, data, {
			headers: AuthConfig,
		});
		reset();

	};

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

    return<>

    <EditOutlined onClick={showModal}/>
    
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
                label="Novo nome"
                inputRef={register}
                name="name"
                error={!!errors.name}
                helperText={errors.name?.message}
            />
             <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Nova descrição"
                inputRef={register}
                name="description"
                error={!!errors.description}
                helperText={errors.description?.message}
            />
        </form>
            </Modal>
    </>
}

export default EditCardGroup
