import styled from "styled-components";

export const ContactsContainer = styled.div`
	width: 75%;
	display: flex;
	justify-content: space-around;
	align-self: center;
	font-size: 10px;
	@media only screen and (min-width: 600px) {
		min-width: 50%;
		font-size: 16px;
	}
`;

export const FooterContainer = styled.div`
	width: 100%;
	height: 50px;
	margin-top: 40px;
	background-color: #003554;
	display: flex;
	justify-content: space-between;
	color: white;
	@media only screen and (min-width: 600px) {
		position: absolute;
		bottom: 0;
	}
`;

export const LinkedinLogo = styled.img`
	width: 10px;
	height: auto;
	@media only screen and (min-width: 600px) {
		width: 20px;
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
		width: 5vw;
		min-width: 60px;
	}
`;
