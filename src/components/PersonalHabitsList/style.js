import styled from "styled-components";
import { Button } from "@material-ui/core";

export const HabitContainer = styled.div`
	display: flex;
	align-items: center;
	border-bottom: 1px dotted #1ea896;
	justify-content: space-around;
	flex-wrap: wrap;
	max-width: 100%;
	padding: 1%;
	min-height: 3rem;
`;

export const ButtonContainer = styled.div`
	margin-top: 0.5rem;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	height: 2rem;
	svg {
		font-size: 1.5rem;
	}
`;

export const TitleHabit = styled.div`
	font-weight: 700;
`;

export const ContentDiv = styled.div`
	text-align: center;
`;

export const DeleteBtn = styled(Button)``;
