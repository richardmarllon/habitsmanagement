import { GroupsList } from "./components/GroupsList";
import Register from "./components/Register";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Register />
				<GroupsList />
			</header>
		</div>
	);
}

export default App;
