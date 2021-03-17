import { habitsAPI } from "../../services/api";
import axios from "axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@material-ui/core";
import { useContext } from "react";
import { useUser } from "../../Providers/User";

const GroupForm = () => {
	const { userToken } = useUser();
	console.log(userToken);
	const schema = yup.object().shape({
		name: yup.string().required("Campo Obrigatório"),
		description: yup.string().required("Campo Obrigatório"),
		category: yup.string().required("Campo Obrigatório"),
	});

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});
	const handleForm = async (data) => {
		if (userToken !== "") {
			const AuthConfig = { Authorization: `Bearer ${JSON.parse(userToken)}` };

			const resp = await habitsAPI.post(`groups/`, data, {
				headers: AuthConfig,
			});
			console.log(resp);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit(handleForm)}>
				<div>
					<TextField
						variant="outlined"
						label="Nome"
						size="small"
						name="name"
						inputRef={register}
						error={!!errors.name}
						helperText={errors.name?.message}
					/>
					<TextField
						variant="outlined"
						label="Descrição"
						size="small"
						name="description"
						inputRef={register}
						error={!!errors.description}
						helperText={errors.description?.message}
					/>
					<TextField
						variant="outlined"
						label="Categoria"
						size="small"
						name="category"
						inputRef={register}
						error={!!errors.category}
						helperText={errors.category?.message}
					/>
				</div>
				<Button type="submit">Criar Grupo</Button>
			</form>
		</div>
	);
};

export default GroupForm;
