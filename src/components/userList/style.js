import styled from "styled-components";
import { Pagination } from "antd";

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
	margin: 3rem auto;
	font-size: 1rem;
	text-align: center;
	padding: 0 0 3rem 0;
`;
