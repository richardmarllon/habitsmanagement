import styled from "styled-components";
import { Button } from "@material-ui/core";

export const Container = styled.div`
	box-sizing: border-box;
	margin: 10px auto;
	width: 90vw;
	border: 1px solid #1ea896;
	border-radius: 20px;
	display: flex;

	@media (min-width: 600px) {
		margin: 10px 5px;
		flex-direction: column;
		align-items: center;
		max-width: 250px;
		background: rgba(0, 53, 84, 0.15);
		border: none;
	}
`;

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 2;
	justify-content: space-evenly;

	@media (min-width: 600px) {
	}
	//
`;

export const StyledAvatar = styled.img`
	padding: 3%;
	width: 30vw;

	@media (min-width: 600px) {
		max-width: 150px;
	}
`;
export const StyledName = styled.h2`
	text-align: center;
	@media (min-width: 600px) {
		background-color: white;
		padding: 0 1rem;
	}
`;

export const StyledButton = styled(Button)`
	background: rgba(30, 168, 150, 0.5) !important;
	border-radius: 8px !important;
	margin: 10px auto !important;
	@media (min-width: 600px) {
	}
`;
