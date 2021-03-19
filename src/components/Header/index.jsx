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
import { useState } from "react";
import { useEffect } from "react";

const Header = ({ pageName, backgroundColor = false }) => {
	const { userToken, setUserToken, showLogin, setShowLogin } = useUser();
	const history = useHistory();
	const [local, setLocal] = useState("");

	useEffect(() => {
		setLocal(history.location.pathname);
	}, [history.location.pathname]);

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
					<ButtonsContainer>
						<ButtonMenu
							onClick={() => {
								history.push("/home");
							}}
							variant="contained"
							local={local === "/home"}
						>
							HOME
						</ButtonMenu>
						<ButtonMenu
							onClick={() => {
								history.push("/groups");
							}}
							variant="contained"
							local={local === "/groups"}
						>
							GRUPOS
						</ButtonMenu>
						<ButtonMenu
							onClick={() => {
								history.push("/users");
							}}
							variant="contained"
							local={local === "/users"}
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
					<ButtonsContainer>
						<ButtonMenu
							variant="contained"
							local={!showLogin}
							onClick={() => {
								setShowLogin(false);
							}}
						>
							REGISTRAR
						</ButtonMenu>
						<ButtonMenu
							variant="contained"
							local={showLogin}
							onClick={() => {
								setShowLogin(true);
							}}
						>
							LOGIN
						</ButtonMenu>
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
