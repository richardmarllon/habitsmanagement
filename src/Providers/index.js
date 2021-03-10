import { ActivitiesProvider } from "./Activities";
import { GoalsProvider } from "./Goals";
import { GroupsProvider } from "./Groups";
import { HabitsProvider } from "./Habits";
import { UserProvider } from "./User";

const Providers = ({ children }) => {
	return (
		<ActivitiesProvider>
			<GoalsProvider>
				<GroupsProvider>
					<HabitsProvider>
						<UserProvider>{children}</UserProvider>
					</HabitsProvider>
				</GroupsProvider>
			</GoalsProvider>
		</ActivitiesProvider>
	);
};

export default Providers;
