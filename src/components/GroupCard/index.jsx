import { useUser } from "../../Providers/User";
import { habitsAPI } from "../../services/api";
import { GroupContainer, ParticipantContainer, StyledButton } from "./style";
import GroupModal from "../GroupModal";

const GroupCard = ({ group }) => {
	const { userGroup, userToken, setUserGroup } = useUser();
	const AuthConfig = { Authorization: `Bearer ${JSON.parse(userToken)}` };

	const handleAdd = async () => {
		let response = await habitsAPI.post(`groups/${group.id}/subscribe/`, null, {
			headers: AuthConfig,
		});
		console.log(
			`RESPOSTA ENTRAR NO GRUPO ${group.id} => `,
			response.status,
			response.statusText
		);
		setUserGroup(group.id);
	};

	return (
		<GroupContainer>
			<h3>{group.name}</h3>
			<h5>Qtd de participantes: {group.users.length}</h5>
			<ParticipantContainer>
				<h4>Participantes: </h4>
				{group.users.map((user, index) => (
					<img
						alt="user avatar"
						key={index}
						src={
							user.id % 2 === 0
								? "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
								: "https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png"
						}
					/>
				))}
			</ParticipantContainer>
			<div>
				{group.id === userGroup ? (
					<h4 style={{ color: "red" }}>Você está neste grupo!</h4>
				) : (
					<StyledButton
						variant="outlined"
						onClick={() => {
							handleAdd();
						}}
					>
						Participar
					</StyledButton>
				)}
				<GroupModal group={group}>Detalhes</GroupModal>
			</div>
		</GroupContainer>
	);
};

export default GroupCard;
