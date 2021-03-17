import { useState } from "react";
import { useHistory } from "react-router";
import { Container, ContainerMobile } from "./style";

const NotFound = () => {
	const [time, setTime] = useState(5);
	const history = useHistory();

	setTimeout(() => {
		if (time === 0) {
			history.push("/");
		}
		setTime(time - 1);
	}, 1000);

	return (
		<>
			<ContainerMobile class="loading">
				<div class="wave2">
					<div class="img" />
					<h4>You've got lost!</h4>
					<h3>redirecting in: {time}s</h3>
				</div>
			</ContainerMobile>

			<Container>
				<div id="wrapper">
					<h1
						class="glitch"
						data-text="
            404 - not found"
					>
						404 - not found
					</h1>
					<span class="sub">you seem lost in here</span>
					<div class="sub">redirecting in: {time}s</div>
				</div>
			</Container>
		</>
	);
};

export default NotFound;
