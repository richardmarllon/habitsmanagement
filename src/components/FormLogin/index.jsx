import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import {
	Button,
	createMuiTheme,
	makeStyles,
	TextField,
} from "@material-ui/core/";

const FormLogin = () => {
	const schema = yup.object().shape({
		username: yup.string().required("Campo Obrigatório"),
		password: yup.string().min(6, "minimo de 6").required("Campo Obrigatório"),
	});

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	const handleForm = (data) => {
		console.log(data);
		axios
			.post("https://kabit-api.herokuapp.com/users/", data)
			.then((resp) => console.log(resp));
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
