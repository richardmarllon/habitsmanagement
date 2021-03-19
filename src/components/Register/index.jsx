import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { habitsAPI } from "../../services/api";
import { TextField, Button, createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { Container, Content, StyledButton, StyledTextField } from "./style";
import { useUser } from "../../Providers/User";
import { message } from "antd";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "rgba(30, 168, 150, 0.7)",
		},
		secondary: {
			light: "#0066ff",
			main: "#0044ff",

			contrastText: "#ffcc00",
		},

		contrastThreshold: 3,

		tonalOffset: 0.2,
	},
});

const Register = () => {
	const key = "updatable";

	const openMessage = () => {
		message.loading({ content: "Cadastrando...", key });
		setTimeout(() => {
			message.success({ content: "Conta criada!", key, duration: 2 });
		}, 1000);
	};
	const { showLogin, setShowLogin } = useUser();
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
			.min(6, "Mínimo 6 caracteres"),
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
		openMessage();
		setShowLogin(!showLogin);
	};

	return (
		<>
			<Container>
				<Content>
					<form onSubmit={handleSubmit(handleForm)}>
						<h1>Seja bem vindo</h1>
						<p>Registre-se : </p>

						<StyledTextField
							color="primary"
							variant="outlined"
							label="Usuário"
							size="small"
							name="username"
							inputRef={register}
							error={!!errors.username}
							helperText={errors.username?.message}
						/>

						<StyledTextField
							variant="outlined"
							label="E-mail"
							size="small"
							name="email"
							inputRef={register}
							error={!!errors.email}
							helperText={errors.email?.message}
						/>

						<StyledTextField
							variant="outlined"
							type="password"
							label="Senha"
							size="small"
							name="password"
							inputRef={register}
							error={!!errors.password}
							helperText={errors.password?.message}
						/>

						<StyledTextField
							variant="outlined"
							type="password"
							label="Confirmar senha"
							size="small"
							name="confirmPassword"
							inputRef={register}
							error={!!errors.confirmPassword}
							helperText={errors.confirmPassword?.message}
						/>

						<div>
							<ThemeProvider theme={theme}>
								<StyledButton
									type="submit"
									variant="contained"
									color="primary"
									onKeyDown={(e) => {
										if (e === "Enter") {
											handleSubmit(handleForm);
										}
									}}
								>
									Criar
								</StyledButton>
							</ThemeProvider>
						</div>
					</form>
				</Content>
			</Container>
		</>
	);
};

export default Register;
