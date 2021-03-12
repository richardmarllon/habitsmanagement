import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@material-ui/core";
import { habitsAPI } from "../../services/api";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { useCalendar } from "../../Providers/Calendar";
import { useActivities } from "../../Providers/Activities";

//SUGESTÃO: Quando for usado na pagina de atividades, passar os valores das keys
//do array "activities" por props, coloquei o nome da props como key, para poder
//fazer a atualização na atividade especifica
const UpdateActivity = (props) => {
	const token = localStorage.getItem("token") || "";

	const { activities } = useActivities();

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
		if (token !== "") {
			const AuthConfig = { Authorization: `Bearer ${JSON.parse(token)}` };
			data.realization_time = data.realization_time.toISOString();
			data.group = 1;
			console.log(AuthConfig);
			await habitsAPI.patch(`activities/${activities[props.key].id}/`, data, {
				headers: AuthConfig,
			});
		}
	};
	return (
		<>
			<form onSubmit={handleSubmit(handleForm)}>
				<h1>Editar atividade</h1>
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
				<Button type="submit">Salvar</Button>
				<Button>Voltar</Button>
			</form>
		</>
	);
};

export default UpdateActivity;
