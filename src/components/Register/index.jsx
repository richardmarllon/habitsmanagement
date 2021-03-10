import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { habitsAPI } from "../../services/api";
import { TextField, Button } from "@material-ui/core";

const Register = () => {
	const schema = yup.object().shape({
		username: yup.string().required("Campo Obrigatório"),
		email: yup
			.string()
			.required("Campo Obrigatório")
			.matches(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				"Email invalido"
			),
		password: yup
			.string()
			.required("Campo Obrigatório")
			.min(6, "Minimo 6 caracteres"),
		confirmPassword: yup
			.string()
			.required("Campo Obrigatório")
			.oneOf([yup.ref("password")], "Senhas diferentes"),
	});

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	const handleForm = async (data) => {
		delete data.confirmPassword;
		await habitsAPI.post(`/users/`, data);
	};

	return (
		<>
			<form onSubmit={handleSubmit(handleForm)}>
				<h1>Registre-se</h1>
				<TextField
					variant="outlined"
					label="Usuário"
					size="small"
					name="username"
					inputRef={register}
					error={!!errors.username}
					helperText={errors.username?.message}
				/>
				<br />
				<br />
				<TextField
					variant="outlined"
					label="Email"
					size="small"
					name="email"
					inputRef={register}
					error={!!errors.email}
					helperText={errors.email?.message}
				/>
				<br />
				<br />
				<TextField
					variant="outlined"
					type="password"
					label="Senha"
					size="small"
					name="password"
					inputRef={register}
					error={!!errors.password}
					helperText={errors.password?.message}
				/>
				<br />
				<br />
				<TextField
					variant="outlined"
					type="password"
					label="Comfirmar senha"
					size="small"
					name="confirmPassword"
					inputRef={register}
					error={!!errors.confirmPassword}
					helperText={errors.confirmPassword?.message}
				/>
				<br />
				<br />
				<Button type="submit" variant="contained" color="secondary">
					Criar
				</Button>
				<Button variant="contained" color="primary">
					Voltar
				</Button>
			</form>
		</>
	);
};

export default Register;
