import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@material-ui/core";
import { habitsAPI } from "../../services/api";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { useCalendar } from "../../Providers/Calendar";

const CreateActivity = () => {
	const token = localStorage.getItem("token") || "";

	const { calendar, setCalendar } = useCalendar(new Date());

	const schema = yup.object().shape({
		title: yup.string().required("Campo Obrigatório"),
		realization_time: yup
			.date()
			.default(() => {
				return new Date();
			})
			.required(),
	});

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	const handleForm = async (data) => {
		console.log(data.realization_time);
		if (token !== "") {
			const AuthConfig = { Authorization: `Bearer ${JSON.parse(token)}` };
			data.realization_time = data.realization_time.toISOString();
			data.group = 1;
			console.log(AuthConfig);
			const resp = await habitsAPI.post(`activities/`, data, {
				headers: AuthConfig,
			});
			console.log(resp);
		}
	};
	return (
		<>
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
				<br />
				<br />
				<Button type="submit">Criar</Button>
				<Button>Voltar</Button>
			</form>
		</>
	);
};

export default CreateActivity;
