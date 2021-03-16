import styled from "styled-components";

export const Figure = styled.figure`
	display: flex;
	align-items: center;
	border: 1px solid rgba(30, 168, 150, 0.8);
	border-radius: 4px;
	padding: 5px;

	img {
		width: 60px;
	}
`;

export const GoalListContainer = styled.div`
	display: flex;
	justify-content: space-around;
	flex-flow: row wrap;
`;
