import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const OpenGroupButton = styled(Button)`
	width: 300px !important;
	padding: 30px !important;
	border: 1px solid #1ea896 !important;
	background-color: rgba(30, 168, 150, 0.5) !important;
	border-radius: 10px !important ;
	font-size: 1.2rem !important ;
	display: flex !important ;
	justify-content: space-between !important ;
	align-items: center !important;
	margin-top: 10px !important;
	max-width: 95vw !important;
`;

export const GroupFormModalContainer = styled.div`
	display: block;

	@media (min-width: 600px) {
		display: none;
	}
`;
