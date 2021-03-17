import styled from "styled-components";

export const Container = styled.div`
	background-color: rgba(255, 255, 255, 0.7);
	margin: 150px auto;
	height: 60vh;
	width: 85%;
	border-radius: 10px;
	backdrop-filter: blur(10px);
	@media (min-width: 600px) {
		height: 400px;
		width: 300px;
		margin: 100px 40px 50px 0;
	}
`;

export const Content = styled.div`
	text-align: center;
	padding-top: 35px;
	height: 80%;
	width: 100%;
`;
