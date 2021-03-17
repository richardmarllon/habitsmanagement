import styled from "styled-components";

export const ContactsContainer = styled.div`
	width: 75%;
	display: flex;
	justify-content: space-around;
	align-self: center;
	font-size: 10px;
	@media only screen and (min-width: 600px) {
		width: 50%;
		font-size: 16px;
	}
`;

export const LinkedinLogo = styled.img`
	width: 10px;
	height: auto;
	@media only screen and (min-width: 600px) {
		width: 20px;
	}
`;
