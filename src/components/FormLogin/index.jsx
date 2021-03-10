import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { habitsAPI } from "../../services/api";
import { useUser } from "../../Providers/User";

const FormLogin = () => {
	const { setUserToken } = useUser();

	const schema = yup.object().shape({
		username: yup.string().required("Campo Obrigatório"),
		password: yup.string().min(6, "minimo de 8").required("Campo Obrigatório"),
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
				<input name="username" ref={register} required />

				<label for="password">Senha:</label>
				<input type="password" name="password" ref={register} required />

				<button type="submit">Login</button>
			</form>
		</>
	);
};

export default FormLogin;
