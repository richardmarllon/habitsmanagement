import { useUser } from "../../Providers/User";
import { habitsAPI } from "../../services/api";
import { GroupContainer, StyledButton } from "./style";
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
			<h4>Qtd de participantes: {group.users.length}</h4>
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
