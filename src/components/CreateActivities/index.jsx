import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@material-ui/core";
import { habitsAPI } from "../../services/api";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { useCalendar } from "../../Providers/Calendar";
import { useUser } from "../../Providers/User";
import React, { useState } from "react";
import { Modal } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const CreateActivity = () => {
	const { userToken, userGroup } = useUser();
	const AuthConfig = { Authorization: `Bearer ${JSON.parse(userToken)}` };

	const { calendar, setCalendar } = useCalendar();

	const [modalVisible, setModalVisible] = useState(false);
	const showModal = () => {
		reset();
		setModalVisible(true);
	};

	const handleCancel = () => {
		reset();
		setModalVisible(false);
	};

	const schema = yup.object().shape({
		title: yup.string().required("Campo Obrigatório"),
		realization_time: yup
			.date()
			.default(() => {
				return new Date();
			})
			.required(),
	});

	const { register, handleSubmit, errors, reset } = useForm({
		resolver: yupResolver(schema),
	});

	const handleForm = async (data) => {
		data.realization_time = data.realization_time.toISOString();
		data.group = userGroup;
		await habitsAPI.post(`activities/`, data, {
			headers: AuthConfig,
		});
		reset();
		setModalVisible(false);
	};
	return (
		<>
			<Button
				type="primary"
				onClick={showModal}
				variant="outlined"
				style={{ margin: 0, padding: 0, height: "20px", width: "50px" }}
			>
				<PlusCircleOutlined />
			</Button>
			<Modal
				title={`Você está criando uma nova atividade`}
				visible={modalVisible}
				onOk={handleSubmit(handleForm)}
				onCancel={handleCancel}
			>
				<form onSubmit={handleSubmit(handleForm)}>
					<h1>Criar atividade</h1>
					<TextField
						variant="outlined"
						label="Título"
						size="small"
						name="title"
						inputRef={register}
						error={!!errors.title}
						helperText={errors.title?.message}
					/>
					<br />
					<br />
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<DateTimePicker
							label="Data/Hora:"
							name="realization_time"
							ref={register}
							value={calendar}
							onChange={setCalendar}
						/>
					</MuiPickersUtilsProvider>
				</form>
			</Modal>
		</>
	);
};

export default CreateActivity;
