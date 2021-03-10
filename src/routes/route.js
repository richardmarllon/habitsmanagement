import { Redirect, Route as ReactDOMRoute } from "react-router-dom";
import { useUser } from "../Providers/User";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
	const { user } = useUser();

	return (
		<ReactDOMRoute
			{...rest}
			render={() => {
				return isPrivate === !!user ? (
					<Component />
				) : (
					<Redirect
						to={{
							pathname: isPrivate ? "/" : "/home",
						}}
					/>
				);
			}}
		/>
	);
};

export default Route;
