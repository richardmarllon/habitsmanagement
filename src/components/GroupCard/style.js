import { Button } from "@material-ui/core";
import styled from "styled-components";
import { PlusCircleOutlined } from "@ant-design/icons";

export const GroupContainer = styled.div`
	margin: 10px auto;
	text-align: center;
	padding: 15px;
	border: 1px solid #1ea896;
	border-radius: 10px;
	justify-content: space-around;
	align-items: center;
	height: 30vh;
	display: flex;
	flex-direction: column;
	max-width: 300px;
	width: 95vw;

	h3 {
		background-color: white;
		padding: 3px 5px;
	}

	@media (min-width: 600px) {
		margin: 10px 25px;
		background-color: rgba(0, 53, 84, 0.15);
		border: none;
		height: 300px;
		width: 300px;

		h5 {
			display: none;
		}
	}
`;

export const ParticipantContainer = styled.div`
	display: none;

	h3 {
		display: block;
	}

	@media (min-width: 600px) {
		display: inline-block;
		margin: 10px;
	}
`;

export const StyledButton = styled(Button)`
	background-color: ${(props) =>
		props.details
			? "rgba(30, 168, 150, 0.50)"
			: "rgba(30, 168, 150, 0.80)"}!important;
	border-radius: 7px;
	margin: 0px 5px !important;
	max-width: 45%;
`;

export const PlusCircleStyled = styled(PlusCircleOutlined)`
	width: 50px;
`;
