import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";

export const Container = styled.div`
	background-color: rgba(255, 255, 255, 0.7);
	border: 1px solid white;
	margin: 15vh auto 0 auto;
	box-shadow: 0 0 3px 1px white;
	height: 55vh;
	width: 70vw;
	border-radius: 10px;
	backdrop-filter: blur(10px);

	@media (min-width: 600px) {
		height: 60vh;
		width: 20vw;
		margin: 20vh auto 0 auto;
	}
`;

export const Content = styled.div`
	text-align: center;
	padding-top: 35px;
	height: 80%;
	width: 100%;
`;

export const SpaceTop = styled.div`
	@media (min-width: 600px) {
		margin-top: 15px;
	}
`;

export const StyledButton = styled(Button)`
	@media (min-width: 600px) {
		margin-top: 30px !important;
	}
`;

export const StyledTextField = styled(TextField)`
	@media (min-width: 600px) {
		margin-top: 15px !important;
	}
`;
