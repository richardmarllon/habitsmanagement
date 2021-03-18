import styled from "styled-components";
import { Pagination } from "antd";
import { Spin } from "antd";

export const StyledPagination = styled(Pagination)`
	margin: 3rem auto;
	font-size: 1rem;
	text-align: center;
	padding: 0 0 3rem 0;
	padding-bottom: 15vh;
`;

export const GroupsListContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
	margin: 0 auto;
	width: 100vw;
	@media (min-width: 600px) {
		max-width: 1400px;
	}
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
