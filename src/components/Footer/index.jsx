import { ContactsContainer, LinkedinLogo } from "./style";

const Footer = () => {
	return (
		<>
			<img alt="" src="logo.png" />
			<ContactsContainer>
				<a href="https://www.linkedin.com/in/danilo-kvet">
					<LinkedinLogo
						alt=""
						src="https://image.flaticon.com/icons/png/512/174/174857.png"
					/>{" "}
					Danilo Kvet
				</a>
				<a href="https://www.linkedin.com/in/pedro-henrique-nascimento-a954221b5">
					<LinkedinLogo
						alt=""
						src="https://image.flaticon.com/icons/png/512/174/174857.png"
					/>{" "}
					Pedro Nascimento
				</a>
				<a href="https://www.linkedin.com/in/ricardo-albuquerque-2b5977190">
					<LinkedinLogo
						alt=""
						src="https://image.flaticon.com/icons/png/512/174/174857.png"
					/>{" "}
					Ricardo Albuquerque
				</a>
				<a href="https://www.linkedin.com/in/richardmarllon">
					<LinkedinLogo
						alt=""
						src="https://image.flaticon.com/icons/png/512/174/174857.png"
					/>{" "}
					Richard Silva
				</a>
			</ContactsContainer>
		</>
	);
};

export default Footer;
