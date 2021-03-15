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
`;

export const StyledButton = styled(Button)`
	/* background-color: ${(props) =>
		props.details ? "rgba(30, 168, 150, 0.50)" : "rgba(30, 168, 150, 0.80)"}; */
	background-color: red;
	border-radius: 7px;
	margin: 0px 5px;
`;
