import styled from "styled-components";
import { Button } from "@material-ui/core";

export const HeaderContainer = styled.div`
	display: none;
	@media only screen and (min-width: 600px) {
		max-width: 100vw;
		background-color: #003554;
		height: 10vh;
		color: white;
		display: flex;
		justify-content: space-between;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		text-align: center;
	}
`;

export const MobileHeaderContainer = styled.div`
	max-width: 100vw;
	background-color: #003554;
	height: 10vh;
	color: white;
	display: flex;
	justify-content: space-between;
	margin: 0;
	padding: 0;
	@media only screen and (min-width: 600px) {
		display: none;
	}
`;

export const ButtonMenu = styled(Button)`
	background-color: transparent !important;
	border: solid 1px white !important;
	color: white !important;
	margin: 3% !important;
`;
export const TextContainer = styled.div`
	width: 30vw;
	h1 {
		height: 5rem;
		color: white;
	}
	@media only screen and (min-width: 600px) {
		margin-top: 0.5rem;
		margin-left: 28vw;
		margin-right: auto;
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	z-index: 1;
	@media only screen and (min-width: 600px) {
		display: flex;
		justify-content: space-between;
	}
`;

export const ImageContainer = styled.img`
	margin-left: 2%;
	margin-top: 2%;
	margin-bottom: 2%;
	@media only screen and (min-width: 600px) {
		margin-left: 0.2rem;
		margin-top: 0.2rem;
		margin-bottom: 0.2rem;
	}
`;
