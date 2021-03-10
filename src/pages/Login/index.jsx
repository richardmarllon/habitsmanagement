import Register from "../../components/Register";
import FormLogin from "../../components/FormLogin";
import { LoginContainer } from "./style";
import { useState } from "react";

const Login = () => {
	const [showLogin, setShowLogin] = useState(true);

	return (
		<LoginContainer>
			{showLogin ? <FormLogin /> : <Register />}
			<button onClick={() => setShowLogin(!showLogin)}>
				{showLogin ? "Registrar-se" : "Fazer login"}
			</button>
		</LoginContainer>
	);
};

export default Login;
