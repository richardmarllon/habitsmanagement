import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";

export const Container = styled.div`
	background-color: rgba(255, 255, 255, 0.7);
	border: 1px solid white;
	box-shadow: 0 0 3px 1px white;
	margin: 5vh auto 0 auto;
	min-height: 200px;
	max-height: 30%;
	min-width: 260px;
	max-width: 10%;
	border-radius: 10px;
	backdrop-filter: blur(10px);
	@media (min-width: 600px) {
		width: 300px;
		margin: 20vh auto 0 auto;
	}
`;

export const Content = styled.div`
	text-align: center;

	padding-top: 15px;
	height: 80%;
	width: 100%;
	opacity: 1;
`;

export const StyledButton = styled(Button)`
	margin-top: 30px !important;
`;

export const StyledTextField = styled(TextField)`
	margin-top: 15px !important;
`;
