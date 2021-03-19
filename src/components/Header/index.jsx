import {
	HeaderContainer,
	ButtonsContainer,
	TextContainer,
	ImageContainer,
	ButtonMenu,
	MobileHeaderContainer,
} from "./style";
import { Button } from "@material-ui/core";
import MenuComponent from "../Menu";
import { useUser } from "../../Providers/User";
import { useHistory } from "react-router-dom";

const Header = ({ pageName, backgroundColor = false }) => {
	const { userToken, setUserToken } = useUser();
	const history = useHistory();

	const logOut = () => {
		localStorage.clear();
		setUserToken(null);
		history.push("/");
	};

	return (
		<>
			{userToken ? (
				<HeaderContainer backgroundColor={backgroundColor}>
					<ImageContainer alt="" src="logo.png" />
					<TextContainer>
						<h1>{pageName}</h1>
					</TextContainer>
					<ButtonsContainer>
						<ButtonMenu
							onClick={() => {
								history.push("/home");
							}}
							variant="contained"
						>
							HOME
						</ButtonMenu>
						<ButtonMenu
							onClick={() => {
								history.push("/groups");
							}}
							variant="contained"
						>
							GRUPOS
						</ButtonMenu>
						<ButtonMenu
							onClick={() => {
								history.push("/users");
							}}
							variant="contained"
						>
							USUÁRIOS
						</ButtonMenu>
						<ButtonMenu variant="contained" onClick={logOut}>
							SAIR
						</ButtonMenu>
					</ButtonsContainer>
				</HeaderContainer>
			) : (
				<HeaderContainer backgroundColor={backgroundColor}>
					<ImageContainer alt="" src="logo.png" />
					<TextContainer>{pageName}</TextContainer>
					<ButtonsContainer>
						<Button variant="contained">REGISTRAR</Button>
						<Button variant="contained">LOGIN</Button>
					</ButtonsContainer>
				</HeaderContainer>
			)}

			<MobileHeaderContainer backgroundColor={backgroundColor}>
				<ImageContainer alt="" src="logo.png" />
				<ButtonsContainer>
					<MenuComponent logOut={logOut} />
				</ButtonsContainer>
			</MobileHeaderContainer>
		</>
	);
};

export default Header;
