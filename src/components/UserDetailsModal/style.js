import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Spin } from "antd";

export const StyledButton = styled(Button)`
	background: rgba(30, 168, 150, 0.5) !important;
	border-radius: 8px !important;
	margin: 10px auto !important;
	@media (min-width: 600px) {
	}
`;

export const SpinStyled = styled(Spin)`
	width: 100%;
`;
