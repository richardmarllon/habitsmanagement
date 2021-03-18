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
	FooterContainer,
	DivContainer,
	EasyContainer,
	MediumContainer,
	HardContainer,
	ButtonsCard,
	HeaderHome,
} from "./style";

const Home = () => {
	const { setUserToken, userGroup } = useUser();
	const { personalHabits } = useHabits();
	const { group, username } = useGroup();
	const { activities } = useActivities();
	const history = useHistory();

	console.log(group);

	const clearToken = () => {
		setUserToken("");
		localStorage.removeItem("token");
	};

	return (
		<>
			<Fade>
				<HeaderHome pageName="Home" clearToken={clearToken} />
				<HomeContainer>
					<UsernameContainer>
						<UserImage alt="" src={Avatar} />
						{username && (
							<TitleContainer>
								{username.username}
								<EditUserModal />
							</TitleContainer>
						)}
					</UsernameContainer>
					<CardContainer>
						{group !== null ? (
							<>
								<h1>{group.name}</h1>

								<h2>Metas:</h2>
								{group.goals.length > 0 &&
									group.goals[group.goals.length - 1].difficulty
										.toLowerCase()
										.split("")[0] === "d" && (
										<>
											<h3>
												{" "}
												Título: {group.goals[group.goals.length - 1].title}
											</h3>
											<h3>Dificuldade: </h3>
											<DivContainer>
												<h5>Fácil</h5>
												<h5>Médio</h5>
												<h5>Difícil</h5>
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
												Título: {group.goals[group.goals.length - 1].title}
											</h3>
											<h3>Dificuldade: </h3>
											<DivContainer>
												<h5>Fácil</h5>
												<h5>Médio</h5>
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
												Título: {group.goals[group.goals.length - 1].title}
											</h3>
											<h3>Dificuldade: </h3>
											<DivContainer>
												<h5>Fácil</h5>
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
												Título: {group.goals[group.goals.length - 2].title}
											</h3>
											<h3>Dificuldade: </h3>
											<DivContainer>
												<h5>Fácil</h5>
												<h5>Médio</h5>
												<h5>Difícil</h5>
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
												Título: {group.goals[group.goals.length - 2].title}
											</h3>
											<h3>Dificuldade: </h3>
											<DivContainer>
												<h5>Fácil</h5>
												<h5>Médio</h5>
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
												Título: {group.goals[group.goals.length - 2].title}
											</h3>
											<h3>Dificuldade: </h3>
											<DivContainer>
												<h5>Fácil</h5>
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
						{activities && userGroup > 0 ? (
							<Carousel autoplay>
								<div className="newActivity">
									<h3>Adicionar Atividade: </h3>
									<CreateActivity />
								</div>
								{activities.map((item) => {
									return (
										<div>
											<div className="activities" key={item.id}>
												<div>Atividade: {item.title}</div>
												<div>Grupo: {item.group}</div>
												<UpdateActivity activity={item} />
											</div>
										</div>
									);
								})}
							</Carousel>
						) : null}
					</CardContainer>
					<CardContainer>
						<h1>Hábitos</h1>

						{personalHabits.length !== 0 && (
							<h3>
								<li>{personalHabits[personalHabits.length - 1].title}</li>
								{personalHabits.length >= 2 && (
									<li>{personalHabits[personalHabits.length - 2].title}</li>
								)}
								{personalHabits.length >= 3 && (
									<li>{personalHabits[personalHabits.length - 3].title}</li>
								)}
							</h3>
						)}
						<ButtonsCard>
							<Button
								className="buttonCard"
								onClick={() => {
									history.push("/habits");
								}}
							>
								Gerenciar Hábitos
							</Button>
						</ButtonsCard>
					</CardContainer>

					<FooterContainer>
						<Footer />
					</FooterContainer>
				</HomeContainer>
			</Fade>
		</>
	);
};

export default Home;
