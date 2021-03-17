import { UpCircleOutlined } from "@ant-design/icons";
import { IconButton } from "@material-ui/core";
import styled from "styled-components";

export const StyledContainer = styled.div`
	@keyframes fadeOpen {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	animation: fadeOpen 1s ease 0s normal forwards;
	position: fixed;
	bottom: 0;
	left: 0;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	height: 15vh;
	width: 100%;
	background: rgb(255, 255, 255);
	background: linear-gradient(
		0deg,
		rgba(255, 255, 255, 1) 28%,
		rgba(255, 255, 255, 0.8127626050420168) 73%,
		rgba(255, 255, 255, 0) 100%
	);
	@media (min-width: 600px) {
		display: none;
	}
`;

export const StyledButtonUp = styled(IconButton)``;

export const IconUp = styled(UpCircleOutlined)`
	font-size: 3rem;
	margin-top: 15px;
	padding: 15px;
`;
