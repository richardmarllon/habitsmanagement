import styled from "styled-components";
import mobile from "../images/404mobile.gif";
import wave from "../images/wave.png";
import desktopbg from "../images/404desktop.jpeg";

export const Container = styled.div`
	display: none;
	@media (min-width: 600px) {
		background: rgb(10, 10, 10);
		min-height: calc(100vh - 65px);
		min-width: 100vw;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: linear-gradient(rgba(10, 10, 10, 0.6), rgba(0, 0, 0, 0.9)),
			repeating-linear-gradient(
				0,
				transparent,
				transparent 2px,
				black 3px,
				black 3px
			),
			url(${desktopbg});

		background-size: cover;
		background-position: center;
		z-index: 1;

		#wrapper {
			text-align: center;
		}

		.sub {
			font-size: 1.2rem;
			color: rgb(100, 220, 220);
			letter-spacing: 1em;
			text-align: center;
		}
		div.sub {
			margin-top: 2rem;
			letter-spacing: 0.7em;
		}
		.glitch {
			position: relative;
			color: white;
			font-size: 5em;
			letter-spacing: 0.5em;
			animation: glitch-skew 1s infinite linear alternate-reverse;
		}
		.glitch::before {
			content: attr(data-text);
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			left: 2px;
			text-shadow: -2px 0 #ff00c1;
			clip: rect(44px, 450px, 56px, 0);
			animation: glitch-anim 5s infinite linear alternate-reverse;
		}
		.glitch::after {
			content: attr(data-text);
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			left: -2px;
			text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
			animation: glitch-anim2 1s infinite linear alternate-reverse;
		}
		@keyframes glitch-anim {
			0% {
				clip: rect(90px, 9999px, 27px, 0);
				transform: skew(0.61deg);
			}
			5% {
				clip: rect(55px, 9999px, 50px, 0);
				transform: skew(0.27deg);
			}
			10% {
				clip: rect(37px, 9999px, 27px, 0);
				transform: skew(0.19deg);
			}
			15% {
				clip: rect(9px, 9999px, 53px, 0);
				transform: skew(0.96deg);
			}
			20% {
				clip: rect(6px, 9999px, 32px, 0);
				transform: skew(0.26deg);
			}
			25% {
				clip: rect(30px, 9999px, 92px, 0);
				transform: skew(0.35deg);
			}
			30% {
				clip: rect(58px, 9999px, 73px, 0);
				transform: skew(0.37deg);
			}
			35% {
				clip: rect(53px, 9999px, 57px, 0);
				transform: skew(0.19deg);
			}
			40% {
				clip: rect(43px, 9999px, 82px, 0);
				transform: skew(0.61deg);
			}
			45% {
				clip: rect(100px, 9999px, 37px, 0);
				transform: skew(0.77deg);
			}
			50% {
				clip: rect(68px, 9999px, 15px, 0);
				transform: skew(0.97deg);
			}
			55% {
				clip: rect(75px, 9999px, 76px, 0);
				transform: skew(0.35deg);
			}
			60% {
				clip: rect(19px, 9999px, 18px, 0);
				transform: skew(0.01deg);
			}
			65% {
				clip: rect(92px, 9999px, 30px, 0);
				transform: skew(0.86deg);
			}
			70% {
				clip: rect(40px, 9999px, 42px, 0);
				transform: skew(0.47deg);
			}
			75% {
				clip: rect(59px, 9999px, 90px, 0);
				transform: skew(0.65deg);
			}
			80% {
				clip: rect(64px, 9999px, 14px, 0);
				transform: skew(0.9deg);
			}
			85% {
				clip: rect(76px, 9999px, 80px, 0);
				transform: skew(0.57deg);
			}
			90% {
				clip: rect(9px, 9999px, 25px, 0);
				transform: skew(0.9deg);
			}
			95% {
				clip: rect(69px, 9999px, 40px, 0);
				transform: skew(0.55deg);
			}
			100% {
				clip: rect(71px, 9999px, 48px, 0);
				transform: skew(0.04deg);
			}
		}
		@keyframes glitch-anim2 {
			0% {
				clip: rect(93px, 9999px, 67px, 0);
				transform: skew(0.81deg);
			}
			5% {
				clip: rect(3px, 9999px, 10px, 0);
				transform: skew(0.97deg);
			}
			10% {
				clip: rect(8px, 9999px, 23px, 0);
				transform: skew(0.9deg);
			}
			15% {
				clip: rect(24px, 9999px, 25px, 0);
				transform: skew(0.4deg);
			}
			20% {
				clip: rect(27px, 9999px, 78px, 0);
				transform: skew(0.02deg);
			}
			25% {
				clip: rect(17px, 9999px, 37px, 0);
				transform: skew(0.14deg);
			}
			30% {
				clip: rect(40px, 9999px, 52px, 0);
				transform: skew(0.78deg);
			}
			35% {
				clip: rect(10px, 9999px, 18px, 0);
				transform: skew(0.38deg);
			}
			40% {
				clip: rect(90px, 9999px, 40px, 0);
				transform: skew(0.5deg);
			}
			45% {
				clip: rect(6px, 9999px, 57px, 0);
				transform: skew(0.33deg);
			}
			50% {
				clip: rect(65px, 9999px, 40px, 0);
				transform: skew(0.26deg);
			}
			55% {
				clip: rect(29px, 9999px, 36px, 0);
				transform: skew(0.4deg);
			}
			60% {
				clip: rect(48px, 9999px, 13px, 0);
				transform: skew(0.63deg);
			}
			65% {
				clip: rect(78px, 9999px, 62px, 0);
				transform: skew(0.38deg);
			}
			70% {
				clip: rect(61px, 9999px, 54px, 0);
				transform: skew(0.23deg);
			}
			75% {
				clip: rect(12px, 9999px, 68px, 0);
				transform: skew(0.2deg);
			}
			80% {
				clip: rect(68px, 9999px, 25px, 0);
				transform: skew(0.89deg);
			}
			85% {
				clip: rect(71px, 9999px, 35px, 0);
				transform: skew(0.51deg);
			}
			90% {
				clip: rect(11px, 9999px, 10px, 0);
				transform: skew(1deg);
			}
			95% {
				clip: rect(3px, 9999px, 60px, 0);
				transform: skew(0.09deg);
			}
			100% {
				clip: rect(22px, 9999px, 81px, 0);
				transform: skew(0.48deg);
			}
		}
		@keyframes glitch-skew {
			0% {
				transform: skew(0deg);
			}
			10% {
				transform: skew(-3deg);
			}
			20% {
				transform: skew(-1deg);
			}
			30% {
				transform: skew(4deg);
			}
			40% {
				transform: skew(-1deg);
			}
			50% {
				transform: skew(5deg);
			}
			60% {
				transform: skew(0deg);
			}
			70% {
				transform: skew(-3deg);
			}
			80% {
				transform: skew(4deg);
			}
			90% {
				transform: skew(1deg);
			}
			100% {
				transform: skew(-4deg);
			}
		}
	}
`;

export const ContainerMobile = styled.div`
	background: #212121;
	min-width: 100vw;
	height: 100vh;
	text-align: center;
	h3,
	h4 {
		text-transform: uppercase;

		margin-top: 3vh;
		color: white;
	}

	.img {
		height: 75vw;
		width: 100vw;
		max-width: 100vw;
		margin: 0 auto;
		background-image: url(${mobile});
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
	}

	.loading2 {
		top: 240px;
	}

	.wave2 {
		min-height: 100vh;
		background-image: url(${wave});
		background-color: transparent;
		text-shadow: 0px 0px rgba(255, 255, 255, 0.06);
		animation: wave-animation 1s infinite linear,
			loading-animation 6s linear forwards;
		background-repeat: repeat-x;
		opacity: 1;
	}

	@keyframes wave-animation {
		0% {
			background-position: 0 bottom;
		}
		100% {
			background-position: 200px bottom;
		}
	}
	@keyframes loading-animation {
		0% {
			background-size: 200px 0px;
		}
		100% {
			background-size: 200px 110vh;
		}
	}

	@media (min-width: 600px) {
		display: none;
	}
`;
