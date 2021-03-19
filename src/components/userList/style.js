import styled from "styled-components";
import { Pagination } from "antd";
import { Spin } from "antd";

export const UsersContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 600px) {
		flex-direction: row;
		justify-content: space-around;
		flex-wrap: wrap;
		max-width: 1000px;
		margin: 0 auto;
	}
`;

export const StyledPagination = styled(Pagination)`
	margin: 1rem auto;
	font-size: 1rem;
	text-align: center;
	padding: 0 0 15vh 0;
`;

export const LoadingDiv = styled.div`
	z-index: 1;
	height: 150%;
	min-width: 100vw;
	backdrop-filter: blur(35px);
	position: absolute;

	background-color: rgba(255, 255, 255, 0.5);
`;

export const SpinStyled = styled(Spin)`
	width: 100%;
	margin-top: 20%;
`;
