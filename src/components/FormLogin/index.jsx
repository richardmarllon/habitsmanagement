import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const FormLogin = () => {
	const schema = yup.object().shape({
		username: yup.string().required("Campo Obrigatório"),
		password: yup.string().min(8, "minimo de 8").required("Campo Obrigatório"),
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
				<input name="username" ref={register} required />

				<label for="password">Senha:</label>
				<input type="password" name="password" ref={register} required />

				<button type="submit">Login</button>
			</form>
		</>
	);
};

export default FormLogin;
