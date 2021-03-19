import Register from "../../components/Register";
import FormLogin from "../../components/FormLogin";
import { LoginContainer, Body, Contents, ImageContainer } from "./style";
import Header from "../../components/Header";
import Logo from "../../components/images/logo2.png";
import { useUser } from "../../Providers/User";

const Login = () => {
	const { showLogin, setShowLogin } = useUser();

	return (
		<>
			<Body>
				<Header backgroundColor pageName="Login" />
				<Contents>
					<ImageContainer>
						<img src={Logo} />
						<p>
							Gerencie seus <b>hábitos</b>,<br /> Compartilhe atividades,
							<br /> Se desenvolva
						</p>
					</ImageContainer>
					<LoginContainer>
						{showLogin ? <FormLogin /> : <Register />}
					</LoginContainer>
				</Contents>

				{/* <FooterContainer>
					<Footer />
				</FooterContainer> */}
			</Body>
		</>
	);
};

export default Login;
