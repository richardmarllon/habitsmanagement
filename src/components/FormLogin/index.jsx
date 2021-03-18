import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
	Button,
	createMuiTheme,
	makeStyles,
	TextField,
} from "@material-ui/core/";
import { ThemeProvider } from "@material-ui/styles";
import { habitsAPI } from "../../services/api";
import { useUser } from "../../Providers/User";
import { Container, Content, SpaceTop, StyledButton } from "./style";

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

const FormLogin = () => {
	const { setUserToken, showLogin, setShowLogin } = useUser();

	const schema = yup.object().shape({
		username: yup.string().required("Campo Obrigatório"),
		password: yup
			.string()
			.min(6, "Mínimo de 6 caracteres")
			.required("Campo Obrigatório"),
	});

	const { register, handleSubmit, errors } = useForm({
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
		<Container>
			<Content>
				<div>
					<form onSubmit={handleSubmit(handleForm)}>
						<h1>Seja bem vindo</h1>
						<p>Entre na sua conta : </p>
						<SpaceTop />
						<TextField
							margin="normal"
							variant="outlined"
							label="Nome do usuário"
							name="username"
							size="small"
							color="primary"
							inputRef={register}
							error={!!errors.username || !!errors.password}
							helperText={errors.username?.message}
						/>

						<TextField
							color="secondary"
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
						<div>
							<ThemeProvider theme={theme}>
								<StyledButton
									variant="contained"
									color="primary"
									type="onSubmit"
									onKeyDown={(e) => {
										if (e === "Enter") {
											handleSubmit(handleForm);
										}
									}}
								>
									Entrar
								</StyledButton>
							</ThemeProvider>
						</div>
					</form>
				</div>
			</Content>

			<></>
		</Container>
	);
};

export default FormLogin;
