import { habitsAPI } from "../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@material-ui/core";
import { useUser } from "../../Providers/User";
import { GroupFormContainer, StyledGroupFormButton } from "./style";

const GroupForm = ({ modal = false }) => {
	const { userToken } = useUser();
	console.log(userToken);
	const schema = yup.object().shape({
		name: yup.string().required("Campo Obrigatório"),
		description: yup.string().required("Campo Obrigatório"),
		category: yup.string().required("Campo Obrigatório"),
	});

	const { register, handleSubmit, errors, reset } = useForm({
		resolver: yupResolver(schema),
	});

	const handleForm = async (data) => {
		if (userToken !== "") {
			const AuthConfig = { Authorization: `Bearer ${JSON.parse(userToken)}` };

			const resp = await habitsAPI.post(`groups/`, data, {
				headers: AuthConfig,
			});
			console.log(resp);
			reset();
		}
	};

	return (
		<GroupFormContainer modal={modal}>
			<h3>Criar um novo grupo</h3>
			<form onSubmit={handleSubmit(handleForm)}>
				<div>
					<TextField
						variant="outlined"
						label="Nome"
						size="small"
						name="name"
						margin="small"
						inputRef={register}
						error={!!errors.name}
						helperText={errors.name?.message}
					/>
					<TextField
						variant="outlined"
						label="Categoria"
						size="small"
						name="category"
						margin="normal"
						inputRef={register}
						error={!!errors.category}
						helperText={errors.category?.message}
					/>
					<TextField
						variant="outlined"
						label="Descrição"
						size="medium"
						name="description"
						margin="normal"
						inputRef={register}
						error={!!errors.description}
						helperText={errors.description?.message}
					/>
				</div>
				<StyledGroupFormButton type="submit">Criar</StyledGroupFormButton>
			</form>
		</GroupFormContainer>
	);
};

export default GroupForm;
