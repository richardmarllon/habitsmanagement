import Register from "./components/Register";
import { UserList } from "./components/userList";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Register />
				<UserList />
			</header>
		</div>
	);
}

export default App;
