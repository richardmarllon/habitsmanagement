import { useUser } from "../../Providers/User";
import { habitsAPI } from "../../services/api";
import {
	GroupContainer,
	ParticipantContainer,
	PlusCircleStyled,
	StyledButton,
} from "./style";
import GroupModal from "../GroupModal";
import UserDetailsModal from "../UserDetailsModal";

const GroupCard = ({ group, setChanger, changer }) => {
	const { userGroup, userToken, setUserGroup } = useUser();
	const AuthConfig = { Authorization: `Bearer ${JSON.parse(userToken)}` };

	const handleAdd = async () => {
		let response = await habitsAPI.post(`groups/${group.id}/subscribe/`, null, {
			headers: AuthConfig,
		});
		setUserGroup(group.id);
		setChanger(!changer);
	};

	return (
		<GroupContainer>
			<h3>{group.name}</h3>
			<h5>Qtd de participantes: {group.users.length}</h5>
			<ParticipantContainer>
				<h4>Participantes: </h4>
				{!group.users[0] && <p>Nenhum participante</p>}
				{group.users[0] &&
					group.users.length < 9 &&
					group.users.map((user, index) => (
						<UserDetailsModal user={user} key={index} groupsPage />
					))}
				{group.users[0] && group.users.length >= 9 && (
					<>
						{group.users.map((user, index) => {
							if (index > 6) {
								return <></>;
							} else {
								return <UserDetailsModal user={user} key={index} groupsPage />;
							}
						})}
						<PlusCircleStyled />
					</>
				)}
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
