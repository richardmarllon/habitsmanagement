import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
	Button,
	createMuiTheme,
	makeStyles,
	TextField,
} from "@material-ui/core/";
import { habitsAPI } from "../../services/api";
import { useUser } from "../../Providers/User";

const FormLogin = () => {
	const { setUserToken } = useUser();

	const schema = yup.object().shape({
		username: yup.string().required("Campo Obrigatório"),
		password: yup.string().min(6, "minimo de 6").required("Campo Obrigatório"),
	});

	const { register, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	});

	const handleForm = (data) => {
		console.log(data);
		habitsAPI.post("sessions/", data).then((resp) => {
			console.log(resp);
			setUserToken(JSON.stringify(resp.data.access));
			localStorage.setItem("token", JSON.stringify(resp.data.access));
		});
	};

	return (
		<>
			<form onSubmit={handleSubmit(handleForm)}>
				<h1>Login</h1>

				<label for="username">Nome de usuário:</label>
				<TextField
					margin="normal"
					variant="outlined"
					label="username"
					name="username"
					size="small"
					color="primary"
					inputRef={register}
					error={!!errors.username || !!errors.password}
					helperText={errors.username?.message}
				/>

				<TextField
					margin="normal"
					type="password"
					variant="outlined"
					label="Senha"
					name="password"
					size="small"
					color="primary"
					inputRef={register}
					error={!!errors.password || !!errors.email}
					helperText={errors.password?.message}
				/>

				<Button type="onSubmit">Login</Button>
			</form>
			<></>
		</>
	);
};

export default FormLogin;
