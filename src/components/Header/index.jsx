import {
	HeaderContainer,
	ButtonsContainer,
	TextContainer,
	ImageContainer,
} from "./style";
import { Button } from "@material-ui/core";
import MenuComponent from "../Menu";
import { useUser } from "../../Providers/User";

const Header = (props) => {
	const { userToken } = useUser();
	return (
		<>
			<HeaderContainer>
				{window.screen.width > 600 ? (
					userToken ? (
						<>
							<ImageContainer alt="" src="logo.png" />
							<TextContainer>{props.pageName}</TextContainer>
							<ButtonsContainer>
								<Button
									variant="contained"
									style={{
										backgroundColor: "transparent",
										color: "white",
										border: "solid 1px white",
										margin: "5px",
									}}
								>
									HOME
								</Button>
								<Button
									variant="contained"
									style={{
										backgroundColor: "transparent",
										color: "white",
										border: "solid 1px white",
										margin: "5px",
									}}
								>
									GRUPOS
								</Button>
								<Button
									variant="contained"
									style={{
										backgroundColor: "transparent",
										color: "white",
										border: "solid 1px white",
										margin: "5px",
									}}
								>
									HÁBITOS
								</Button>
								<Button
									variant="contained"
									style={{
										backgroundColor: "transparent",
										color: "white",
										border: "solid 1px white",
										margin: "5px",
									}}
								>
									SAIR
								</Button>
							</ButtonsContainer>
						</>
					) : (
						<>
							<ImageContainer alt="" src="logo.png" />
							<TextContainer>{props.pageName}</TextContainer>
							<ButtonsContainer>
								<Button
									variant="contained"
									style={{
										backgroundColor: "transparent",
										color: "white",
										border: "solid 1px white",
										margin: "5px",
									}}
								>
									REGISTRAR
								</Button>
								<Button
									variant="contained"
									style={{
										backgroundColor: "transparent",
										color: "white",
										border: "solid 1px white",
										margin: "5px",
									}}
								>
									LOGIN
								</Button>
							</ButtonsContainer>
						</>
					)
				) : (
					<>
						<ImageContainer alt="" src="logo.png" />
						<TextContainer>{props.pageName}</TextContainer>
						<ButtonsContainer>
							<MenuComponent />
						</ButtonsContainer>
					</>
				)}
			</HeaderContainer>
		</>
	);
};

export default Header;
