import { Card } from "antd";
import styled from "styled-components";

export const Container = styled.div`
	max-width: fit-content;
	margin: 10px;
`;

export const StyledCard = styled(Card)`
	background-color: rgb(80, 80, 80, 0.5);
	width: 15vw;
	min-width: 240px;
	.ant-card-meta-title {
		font-size: 1.8rem;
	}
	.ant-card-meta-description {
		font-size: 1rem;
		color: white;
	}
`;
