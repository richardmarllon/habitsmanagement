import { useUser } from "../../Providers/User";

const Home = () => {
	const { setUserToken } = useUser();

	const clearToken = () => {
		setUserToken("");
		localStorage.removeItem("token");
	};

	return (
		<div>
			<h1>Home</h1>
			<button onClick={clearToken}>Sair</button>
		</div>
	);
};

export default Home;
