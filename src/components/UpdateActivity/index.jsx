import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@material-ui/core";
import { habitsAPI } from "../../services/api";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { useCalendar } from "../../Providers/Calendar";
import React, { useState } from "react";
import { Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useUser } from "../../Providers/User";
import { useGroups } from "../../Providers/Groups";

const UpdateActivity = ({ activity }) => {
	const { userToken } = useUser();
	const { changer, setChanger } = useGroups();
	const AuthConfig = { Authorization: `Bearer ${JSON.parse(userToken)}` };

	const { calendar, setCalendar } = useCalendar();
	setCalendar(activity.realization_time);

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

	const handleDelete = async () => {
		await habitsAPI.delete(`activities/${activity.id}/`, {
			headers: AuthConfig,
		});
		setModalVisible(false);
		setChanger(!changer);
	};

	const handleForm = async (data) => {
		data.realization_time = data.realization_time.toISOString();
		await habitsAPI.patch(`activities/${activity.id}/`, data, {
			headers: AuthConfig,
		});
		reset();
		setModalVisible(false);
		setChanger(!changer);
	};
	return (
		<>
			<Button type="primary" onClick={showModal} variant="outlined">
				<EditOutlined />
			</Button>
			<Modal
				title={`Você está editando a atividade: ${activity.title}`}
				visible={modalVisible}
				onOk={handleSubmit(handleForm)}
				onCancel={handleCancel}
			>
				<form>
					<h1>Editar atividade</h1>
					<TextField
						fullWidth
						margin="normal"
						variant="outlined"
						label="Título"
						placeholder={`${activity.title}`}
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
							fullWidth
							label="Data/Hora:"
							name="realization_time"
							ref={register}
							value={calendar}
							onChange={setCalendar}
						/>
					</MuiPickersUtilsProvider>
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

export default UpdateActivity;
