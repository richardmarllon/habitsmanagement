import {
	Container,
	InfoContainer,
	StyledAvatar,
	StyledButton,
	StyledName,
} from "./style";
import avatar from "../images/Avatar.png";
import UserDetailsModal from "../UserDetailsModal";
const UserCard = ({ user }) => {
	return (
		<Container>
			<StyledAvatar src={avatar} />
			<InfoContainer>
				<StyledName>{user.username}</StyledName>
				<UserDetailsModal user={user} />
			</InfoContainer>
		</Container>
	);
};

export default UserCard;
