import styled from "styled-components";

export const HomeContainer = styled.body`
	display: flex;
	box-sizing: border-box;
	width: 100vw;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #e5e7e6;
	h1 {
		text-align: center;
	}
	.MuiButton-root {
		width: 40px;
		border: none;
	}
	.slick-list {
		width: 85vw;
		height: 20vh;
		border-radius: 10px;
	}
	.ant-carousel {
		width: 85vw;
		height: 20vh;
		position: relative;
		border-radius: 10px;
	}

	.slick-track {
		width: 85vw;
		height: 20vh;
		border-radius: 10px;
	}
	.activities {
		height: 20vh;
		color: #000;
		background-color: rgba(128, 128, 128, 0.3);
		text-align: center;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		padding-bottom: 2rem;
		font-size: 1rem;
	}
	.newActivity {
		height: 20vh;
		color: #000;
		background-color: rgba(128, 128, 128, 0.3);
		text-align: center;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		font-size: 1rem;
	}
	@media only screen and (min-width: 600px) {
		box-sizing: border-box;
		flex-direction: row;
		justify-content: space-around;
		.activitiesContainer {
			border: none;
			justify-content: flex-end;
			h1 {
				margin-bottom: 0.3rem;
			}
		}
		.slick-list {
			width: 25vw;
			height: 25vh;
		}
		.ant-carousel {
			width: 25vw;
			height: 25vh;
			margin: 0 auto;
			justify-self: flex-end;
		}

		.slick-track {
			width: 25vw;
			height: 25vh;
		}
		.activities {
			height: 25vh;
			color: #000;
			background-color: rgba(128, 128, 128, 0.3);
			text-align: center;
		}
		.newActivity {
			height: 25vh;
			color: #000;
			background-color: rgba(128, 128, 128, 0.3);
			text-align: center;
			border-radius: 10px;
			display: flex;
			flex-direction: column;
			font-size: 1rem;
		}
	}
`;

export const UsernameContainer = styled.div`
	border: solid 1px #1ea896;
	border-radius: 10px;
	width: 90vw;
	height: 10vh;
	margin-top: 10vh;
	svg {
		font-size: 1.5rem;
	}
	@media only screen and (min-width: 600px) {
		position: absolute;
		z-index: 2;
		margin: 0 auto;
		left: 50%;
		transform: translateX(-50%);
		max-width: 30vw;
		display: flex;
		flex-direction: column;
		top: 4rem;
		border: none;
		height: 30vh;
		align-items: center;
	}
`;

export const CardContainer = styled.div`
	box-sizing: border-box;
	border: solid 1px #1ea896;
	border-radius: 10px;
	width: 90vw;
	margin-top: 4rem;
	padding: 0.4rem;
	display: flex;
	flex-direction: column;

	h1 {
		text-align: center;
	}

	h2 {
		margin: 0;
	}

	h3 {
		margin-top: 1rem;
		margin-bottom: 0.7rem;
	}

	svg {
		font-size: 2rem;
	}

	@media only screen and (min-width: 600px) {
		border: solid 1px #1ea896;
		max-width: 30vw;
		min-height: 70vh;
	}
`;

export const ButtonsCard = styled.div`
	display: flex;
	box-sizing: border-box;
	width: 85vw;
	flex-flow: row wrap;
	margin-top: 1rem;
	justify-content: space-around;
	button {
		width: 30vw !important;
		border: solid 1px red;
		margin: 0 !important;
	}
	.buttonCard {
		width: 30vw !important;
		background-color: rgba(30, 168, 150, 0.5);
	}

	@media only screen and (min-width: 600px) {
		max-width: 28vw;
		flex-flow: row nowrap;
		justify-content: space-around;
		margin: 0;
		margin-top: auto;
		button {
			width: 10vw !important;
		}
		.buttonCard {
			width: 15vw !important;
		}
	}
`;

export const TitleContainer = styled.h2`
	text-align: right;
	font-size: 25px;
	padding-top: 0.1rem;
	align-self: center;
	@media only screen and (min-width: 600px) {
	}
`;

export const UserImage = styled.img`
	width: 31%;
	max-width: 90px;
	transform: translateY(50%);
	margin-top: -9rem;
	margin-left: 5vw;
	@media only screen and (min-width: 600px) {
		margin: 0;
		transform: translateY(0);
		width: 70%;
		max-width: 160px;
	}
`;

export const DivContainer = styled.div`
	display: flex;
	width: 100%;
	h5 {
		width: 33.33%;
		margin: 0;
		text-align: center;
	}
`;

export const EasyContainer = styled.div`
	width: 33.33%;
	border-radius: 10px;
	height: 8px;
	background-color: #1ea896;
`;

export const MediumContainer = styled.div`
	width: 33.33%;
	border-radius: 10px;
	height: 8px;
	background-color: #e9e220;
`;

export const HardContainer = styled.div`
	width: 33.33%;
	border-radius: 10px;
	height: 8px;
	background-color: #931f1d;
`;
