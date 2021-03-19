import styled from "styled-components";
import backgroundLogin from "../../components/images/backgroundLogin.png";

export const LoginContainer = styled.div`
	display: flex;
	align-items: flex-end;
	flex-flow: wrap column;

	@media (min-width: 600px) {
		padding-left: 50px;
		width: 30vw;
		img {
		}
	}
`;

export const Body = styled.div`
	height: 100vh;
	background-size: cover;

	background: url(${backgroundLogin}) no-repeat center center fixed;

	@media (min-width: 600px) {
		background: url(${backgroundLogin}) no-repeat center center fixed;

		background-color: #0a131f;
	}
`;

export const Contents = styled.div`
	display: flex;
	align-items: center;

	box-sizing: border-box;
	justify-content: space-around;
`;

export const FooterContainer = styled.div`
	width: 100%;
	height: 50px;
	position: absolute;
	bottom: 0;
	background-color: #003554;
	display: flex;
	justify-content: space-between;
	color: white;
`;

export const ImageContainer = styled.div`
	display: none;
	@media (min-width: 600px) {
		display: block;
		color: white;
		font-size: 1.8rem;

		height: 350px;
		width: 400px;

		img {
			height: 80%;
			width: 90%;
		}
	}
`;
