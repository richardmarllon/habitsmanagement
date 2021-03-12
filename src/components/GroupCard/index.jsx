import { useUser } from "../../Providers/User";
import { habitsAPI } from "../../services/api";
import { GroupContainer } from "./style";
import { Button } from "@material-ui/core";

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
		<>
			<GroupContainer>
				<h3>nome: {group.name}</h3>
				<h3> id: {group.id}</h3>

				<h4>Qtd de participantes: {group.users.length}</h4>
				{group.id === userGroup ? (
					<h3 style={{ color: "red" }}>Você está neste grupo!</h3>
				) : (
					<Button
						variant="outlined"
						onClick={() => {
							handleAdd();
						}}
					>
						Entrar no grupo
					</Button>
				)}
			</GroupContainer>
		</>
	);
};

export default GroupCard;
