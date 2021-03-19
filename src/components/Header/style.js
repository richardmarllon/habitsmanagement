import styled from "styled-components";
import { Button } from "@material-ui/core";

export const HeaderContainer = styled.div`
	display: none;
	@media only screen and (min-width: 600px) {
		max-width: 100vw;
		background-color: ${(props) =>
			props.backgroundColor ? "transparent" : "#003554"};
		height: 10vh;
		color: white;
		display: flex;
		justify-content: space-between;
		margin: 0;
		padding: 0;
		align-items: center;
		box-sizing: border-box;
		text-align: center;
	}
`;

export const MobileHeaderContainer = styled.div`
	max-width: 100vw;
	background-color: ${(props) =>
		props.backgroundColor ? "transparent" : "#003554"};
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
	font-weight: 700;
	background-color: ${(props) =>
		props.local ? `white !important` : ` transparent !important`};
	border: solid 1px white !important;
	color: ${(props) =>
		props.local ? `#003554 !important` : `white !important`};
	margin: 3% !important;
	padding: 0.2rem 1.3rem !important;
`;

export const ButtonsContainer = styled.div`
	display: flex;
	z-index: 1;
	@media only screen and (min-width: 600px) {
		min-width: calc(100vw / 3);
	}
`;

export const ImageContainer = styled.img`
	margin-left: 2%;
	margin-top: 2%;
	margin-bottom: 2%;
	@media only screen and (min-width: 600px) {
	}
`;
