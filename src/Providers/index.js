import { ActivitiesProvider } from "./Activities";
import { GoalsProvider } from "./Goals";
import { GroupsProvider } from "./Groups";
import { HabitsProvider } from "./Habits";
import { UserProvider } from "./User";
import { UsersProvider } from "./Users";

const Providers = ({ children }) => {
	return (
		<ActivitiesProvider>
			<GoalsProvider>
				<GroupsProvider>
					<HabitsProvider>
						<UsersProvider>
							<UserProvider>{children}</UserProvider>
						</UsersProvider>
					</HabitsProvider>
				</GroupsProvider>
			</GoalsProvider>
		</ActivitiesProvider>
	);
};

export default Providers;
