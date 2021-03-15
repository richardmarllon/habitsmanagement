import { Card } from "antd";
import {
	Container,
	InfoContainer,
	StyledAvatar,
	StyledButton,
	StyledCard,
	StyledID,
	StyledName,
} from "./style";
import avatar from "../images/Avatar.png";
const UserCard = ({ user }) => {
	return (
		<Container>
			<StyledAvatar src={avatar} />
			<InfoContainer>
				<StyledName>{user.username}</StyledName>
				<StyledButton variant="outlined">Detalhes</StyledButton>
			</InfoContainer>
		</Container>
	);
};

export default UserCard;
