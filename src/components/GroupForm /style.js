import styled, { css } from "styled-components";
import { GroupContainer } from "../GroupCard/style";
import { StyledButton } from "../GroupCard/style";

export const GroupFormContainer = styled(GroupContainer)`
	min-height: 300px;
	overflow: auto;
	justify-content: space-between;
	display: none;

	${(props) =>
		props.modal &&
		css`
			display: block;
			border: none;
			width: auto;

			h3 {
				display: none;
			}
		`}

	input {
		background-color: rgb(196, 196, 196);
	}

	@media (min-width: 600px) {
		display: block;
	}
`;

export const StyledGroupFormButton = styled(StyledButton)`
	border: 1px solid black !important;
	padding-right: 20px !important;
	padding-left: 20px !important;
`;
