import { useUser } from "../../Providers/User";
import { useHabits } from "../../Providers/Habits";
import EditUserModal from "../../components/EditUserModal";
import { useActivities } from "../../Providers/Activities";
import UpdateActivity from "../../components/UpdateActivity";
import CreateActivity from "../../components/CreateActivity";
import { useHistory } from "react-router";
import Header from "../../components/Header";
import { useGroup } from "../../Providers/Group";
import Footer from "../../components/Footer";
import Avatar from "../../components/images/Avatar.png";
import "antd/dist/antd.css";
import GroupModal from "../../components/GroupModal";
import { Fade } from "react-awesome-reveal";
import { Carousel } from "antd";
import { Button } from "@material-ui/core";
import {
	HomeContainer,
	UsernameContainer,
	UserImage,
	TitleContainer,
	CardContainer,
	DivContainer,
	EasyContainer,
	MediumContainer,
	HardContainer,
	ButtonsCard,
} from "./style";
import PersonalHabitsList from "../../components/PersonalHabitsList";
import AddHabitsModal from "../../components/AddHabitsModal";
import { useEffect } from "react";
import { useGroups } from "../../Providers/Groups";
import { habitsAPI } from "../../services/api";

const Home = () => {
	const {
		setUserToken,
		userGroup,
		userToken,
		username,
		setUsername,
		user,
	} = useUser();
	const { personalHabits } = useHabits();
	const { group } = useGroup();
	const { changer, setChanger } = useGroups();
	const { activities } = useActivities();
	const history = useHistory();

	useEffect(() => {
		async function getGroupUser() {
			const resp = await habitsAPI.get(`users/${user}/`);

			setUsername(resp.data);
		}
		getGroupUser();
	}, [changer, username]);

	const clearToken = () => {
		setUserToken("");
		localStorage.removeItem("token");
	};

	return (
		<>
			<Header pageName="Home" clearToken={clearToken} />
			<HomeContainer>
				<Fade>
					<UsernameContainer>
						<UserImage alt="" src={Avatar} />
						{username && (
							<TitleContainer>
								{username.username} <EditUserModal />
							</TitleContainer>
						)}
					</UsernameContainer>
					<CardContainer>
						{group ? (
							<>
								<h1>{group.name}</h1>

								<h2>Metas:</h2>
								{group.goals.length > 0 &&
									group.goals[group.goals.length - 1].difficulty
										.toLowerCase()
										.split("")[0] === "d" && (
										<>
											<h3>
												T??tulo: {group.goals[group.goals.length - 1].title}
											</h3>
											<h3>Dificuldade: </h3>
											<DivContainer>
												<h5>F??cil</h5>
												<h5>M??dio</h5>
												<h5>Dif??cil</h5>
											</DivContainer>
											<DivContainer>
												<EasyContainer />
												<MediumContainer />
												<HardContainer />
											</DivContainer>
										</>
									)}
								{group.goals.length > 0 &&
									group.goals[group.goals.length - 1].difficulty
										.toLowerCase()
										.split("")[0] === "m" && (
										<>
											<h3>
												{" "}
												T??tulo: {group.goals[group.goals.length - 1].title}
											</h3>
											<h3>Dificuldade: </h3>
											<DivContainer>
												<h5>F??cil</h5>
												<h5>M??dio</h5>
											</DivContainer>
											<DivContainer>
												<EasyContainer />
												<MediumContainer />
											</DivContainer>
										</>
									)}
								{group.goals.length > 0 &&
									group.goals[group.goals.length - 1].difficulty
										.toLowerCase()
										.split("")[0] === "f" && (
										<>
											<h3>
												{" "}
												T??tulo: {group.goals[group.goals.length - 1].title}
											</h3>
											<h3>Dificuldade: </h3>
											<DivContainer>
												<h5>F??cil</h5>
											</DivContainer>
											<DivContainer>
												<EasyContainer />
											</DivContainer>
										</>
									)}
								{group.goals.length >= 2 &&
									group.goals[group.goals.length - 2].difficulty
										.toLowerCase()
										.split("")[0] === "d" && (
										<>
											<h3>
												{" "}
												T??tulo: {group.goals[group.goals.length - 2].title}
											</h3>
											<h3>Dificuldade: </h3>
											<DivContainer>
												<h5>F??cil</h5>
												<h5>M??dio</h5>
												<h5>Dif??cil</h5>
											</DivContainer>
											<DivContainer>
												<EasyContainer />
												<MediumContainer />
												<HardContainer />
											</DivContainer>
										</>
									)}
								{group.goals.length >= 2 &&
									group.goals[group.goals.length - 2].difficulty
										.toLowerCase()
										.split("")[0] === "m" && (
										<>
											<h3>
												{" "}
												T??tulo: {group.goals[group.goals.length - 2].title}
											</h3>
											<h3>Dificuldade: </h3>
											<DivContainer>
												<h5>F??cil</h5>
												<h5>M??dio</h5>
											</DivContainer>
											<DivContainer>
												<EasyContainer />
												<MediumContainer />
											</DivContainer>
										</>
									)}
								{group.goals.length >= 2 &&
									group.goals[group.goals.length - 2].difficulty
										.toLowerCase()
										.split("")[0] === "f" && (
										<>
											<h3>
												{" "}
												T??tulo: {group.goals[group.goals.length - 2].title}
											</h3>
											<h3>Dificuldade: </h3>
											<DivContainer>
												<h5>F??cil</h5>
											</DivContainer>
											<DivContainer>
												<EasyContainer />
											</DivContainer>
										</>
									)}
								<ButtonsCard>
									<GroupModal group={group} className="buttonCard" />
									<Button
										className="buttonCard"
										onClick={() => {
											history.push("/groups");
										}}
									>
										Gerenciar Grupos
									</Button>
								</ButtonsCard>
							</>
						) : (
							<>
								<h1>Sem grupo</h1>
								<ButtonsCard>
									<Button
										className="buttonCard"
										onClick={() => {
											history.push("/groups");
										}}
									>
										Conhecer Grupos
									</Button>
								</ButtonsCard>
							</>
						)}
					</CardContainer>
					<CardContainer className="activitiesContainer">
						<h1>Atividades</h1>
						<Carousel autoplay>
							<div className="newActivity">
								<h3>Adicionar Atividade: </h3>
								<CreateActivity />
							</div>
							{activities && userGroup > 0
								? activities.map((item) => {
										return (
											<div>
												<div className="activities" key={item.id}>
													<div>Atividade: {item.title}</div>
													<div>Grupo: {item.group}</div>
													<UpdateActivity activity={item} />
												</div>
											</div>
										);
								  })
								: null}
						</Carousel>
					</CardContainer>
					<CardContainer>
						<h1>H??bitos</h1>
						<PersonalHabitsList />
						<ButtonsCard>
							<AddHabitsModal />
						</ButtonsCard>
					</CardContainer>
				</Fade>
				<Footer />
			</HomeContainer>
		</>
	);
};

export default Home;
