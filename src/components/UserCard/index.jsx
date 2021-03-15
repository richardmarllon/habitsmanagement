import { Card } from "antd";
import { Container, StyledCard } from "./style";

const { Meta } = Card;
const actions = ["func 1", "func 2"];
const UserCard = ({ user, small = false }) => {
	return (
		<Container>
			<StyledCard
				extra={`ID do usuário: ${user.id}`}
				actions={actions}
				hoverable
				size={"small"}
				cover={
					<img
						alt="user avatar"
						src={
							user.id % 2 === 0
								? "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
								: "https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png"
						}
					/>
				}
				small={small}
			>
				{!small && <Meta title={user.username} description={user.email} />}
			</StyledCard>
		</Container>
	);
};

export default UserCard;
