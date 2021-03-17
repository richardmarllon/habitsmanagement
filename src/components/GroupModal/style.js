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

export const ActivitiesContainer = styled.div`
	background-color: rgba(196, 196, 196, 0.5);
	padding: 5px 10px;
	border: 1px solid black;
	margin: 8px 0;
	display: flex;
	justify-content: space-between;
`;

export const ActivityListContainer = styled.div`
	text-align: center;
	margin-top: 10px;
`;
