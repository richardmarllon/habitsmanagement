import styled, { css } from "styled-components";
import { Button } from "@material-ui/core";

export const StyledCreateActivityButton = styled(Button)`
	margin: 0;
	padding: 0;
	height: 20px;
	width: 50px;
	${({ modal }) =>
		modal &&
		css`
			width: auto;
			height: auto;
		`}
`;
