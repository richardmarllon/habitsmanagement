import { ActivitiesProvider } from "./Activities";
import { GoalsProvider } from "./Goals";
import { GroupsProvider } from "./Groups";
import { HabitsProvider } from "./Habits";
import { UserProvider } from "./User";
import { UsersProvider } from "./Users";
import { CalendarProvider } from "./Calendar";

const Providers = ({ children }) => {
	return (
		<UserProvider>
			<GroupsProvider>
				<GoalsProvider>
					<HabitsProvider>
						<UsersProvider>
							<ActivitiesProvider>
								<CalendarProvider>{children}</CalendarProvider>
							</ActivitiesProvider>
						</UsersProvider>
					</HabitsProvider>
				</GoalsProvider>
			</GroupsProvider>
		</UserProvider>
	);
};

export default Providers;
