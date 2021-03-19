import styled from "styled-components";
import { UnorderedListOutlined } from "@ant-design/icons";

export const MenuContainer = styled.div`
	.ant-menu-inline-collapsed {
		width: 58px;
	}
`;

export const ButtonMenuContainer = styled.div`
	text-align: center;
`;

export const ButtonMenuOpen = styled.button`
	height: 100%;
	background-color: transparent;
	border: none;
	margin: 0;
	padding-right: 1rem;
	padding-top: 0.3rem;
`;

export const IconMenuContainer = styled(UnorderedListOutlined)`
	font-size: 2rem;
`;
