import styled from "styled-components";
import backgroundLogin from "../../components/images/backgroundLogin.png";
import Logo from "../../components/images/logo.png";

export const LoginContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-end;
	flex-flow: wrap column;
	@media (min-width: 600px) {
	}
`;

export const Body = styled.div`
	height: 100vh;

	background: url(${backgroundLogin}) no-repeat center center fixed;

	@media (min-width: 600px) {
		background: url(${backgroundLogin}) no-repeat center center fixed;
		background-size: cover;

		background-color: #0a131f;
	}
`;

export const Contents = styled.div`
	@media (min-width: 600px) {
		background: url(${Logo}) no-repeat center center fixed;
		background-size: 60%;
	}
`;

// export const Remendo = styled.div`
// 	height: 300px;
// 	border: 1px solid red;
// 	background-image: linear-gradient(to right, #041b3c, #0d264b, #00163e);
// `;

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
