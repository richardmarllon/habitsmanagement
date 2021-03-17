import styled from "styled-components";
import { Pagination } from "antd";

export const StyledPagination = styled(Pagination)`
	margin: 3rem auto;
	font-size: 1rem;
	text-align: center;
	padding: 0 0 3rem 0;
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
