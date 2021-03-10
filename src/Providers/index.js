import { ActivitiesProvider } from "./Activities";
import { GoalsProvider } from "./Goals";
import { GroupsProvider } from "./Groups";
import { HabitsProvider } from "./Habits";
import { UserProvider } from "./User";
import { UsersProvider } from "./Users";

const Providers = ({ children }) => {
	return (
		<UserProvider>
			<GoalsProvider>
				<GroupsProvider>
					<HabitsProvider>
						<UsersProvider>
							<ActivitiesProvider>{children}</ActivitiesProvider>
						</UsersProvider>
					</HabitsProvider>
				</GroupsProvider>
			</GoalsProvider>
		</UserProvider>
	);
};

export default Providers;
