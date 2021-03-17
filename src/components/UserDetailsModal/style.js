import styled from "styled-components";
import { Button, IconButton } from "@material-ui/core";
import { Spin } from "antd";

export const StyledButton = styled(Button)`
	background: rgba(30, 168, 150, 0.5) !important;
	border-radius: 8px !important;
	margin: 10px auto !important;
	@media (min-width: 600px) {
	}
`;

export const StyledIconButton = styled(IconButton)`
	padding: 0 !important;

	img {
		width: 50px;
		border-radius: 50%;
		margin: 3px 5px;
	}
`;

export const SpinStyled = styled(Spin)`
	width: 100%;
`;
