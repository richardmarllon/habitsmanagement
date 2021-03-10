import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

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
			.min(8, "Minimo 8 caracteres")
			.required("Campo Obrigatório")
			.matches(
				/^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1}).*$/,
				"Requer no minimo 1 caractere especial"
			),
		confirmPassword: yup
			.string()
			.required("Campo Obrigatório")
			.oneOf([yup.ref("password")], "Senhas diferentes"),
	});

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	const handleForm = (data) => {
		const dataForm = { user: data };
		axios.post("https://kabit-api.herokuapp.com/users/", { ...dataForm });
	};

	return (
		<>
			<form onSubmit={handleSubmit(handleForm)}>
				<h1>Registre-se</h1>
				<label for="username">Nome de usuário:</label>
				<br />
				<input name="username" ref={register} required></input>
				<br />
				<br />
				<label for="email">Email:</label>
				<br />
				<input name="email" ref={register} required></input>
				<br />
				<br />
				<label for="password">Senha:</label>
				<br />
				<input type="password" name="password" ref={register} required></input>
				<br />
				<br />
				<label for="confirmPassword">Confirme a senha:</label>
				<br />
				<input
					type="password"
					name="confirmPassword"
					ref={register}
					required
				></input>
				<br />
				<br />
				<button type="submit">Criar</button>
				<button>voltar</button>
			</form>
		</>
	);
};

export default Register;
