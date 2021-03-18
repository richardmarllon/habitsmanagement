import styled, { css } from "styled-components";

export const HeaderContainer = styled.div`
	width: 100%;

	background-color: ${(props) =>
		props.backgroundColor ? "transparent" : "#003554"};
	color: white;
	display: flex;
	justify-content: space-between;
	height: 60px;
	margin: 0;
	padding: 0;

	@media only screen and (min-width: 600px) {
		height: 50px;
	}
`;

export const TextContainer = styled.h1`
	height: 50px;
	color: white;
	margin-top: 4px;
	@media only screen and (min-width: 600px) {
		padding-left: 200px;
		margin: 0;
	}
`;

export const ButtonsContainer = styled.div`
	width: 80px;
	padding-left: 20px;
	@media only screen and (min-width: 600px) {
		display: flex;
		justify-content: space-between;
	}
`;

export const ImageContainer = styled.img`
	padding: 5px;
`;
