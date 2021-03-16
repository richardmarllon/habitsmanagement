import Register from "../../components/Register";
import FormLogin from "../../components/FormLogin";
import { LoginContainer, FooterContainer } from "./style";
import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Login = () => {
	const [showLogin, setShowLogin] = useState(true);

	return (
		<>
			<Header pageName="Login" />
			<LoginContainer>
				{showLogin ? <FormLogin /> : <Register />}
				<button onClick={() => setShowLogin(!showLogin)}>
					{showLogin ? "Registrar-se" : "Fazer login"}
				</button>
			</LoginContainer>
			<FooterContainer>
				<Footer />
			</FooterContainer>
		</>
	);
};

export default Login;
