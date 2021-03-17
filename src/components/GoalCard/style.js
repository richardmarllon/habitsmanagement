import styled from "styled-components";

export const GoalContainer = styled.div`
	border: 1px solid #1ea896;
	border-radius: 4px;
	padding: 10px;
	margin: 10px 0px;

	@media (min-width: 600px) {
		width: 40%;
	}
`;

export const AchievedText = styled.span`
	color: ${(props) => (props.achieved ? "#1ea896" : "#f50057")};
`;
