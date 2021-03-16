import { Button } from "@material-ui/core";
import styled from "styled-components";

export const GroupContainer = styled.div`
	max-width: 300px;
	margin: 10px auto;
	text-align: center;
	padding: 15px;
	background-color: rgba(0, 53, 84, 0.15);
	border-radius: 10px;
	justify-content: space-around;

	h3 {
		background-color: white;
	}

	@media (min-width: 600px) {
		margin: 10px 25px;

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

	img {
		width: 50px;
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
`;
