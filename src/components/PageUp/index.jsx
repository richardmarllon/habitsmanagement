import { useEffect, useState } from "react";
import { IconUp, StyledButtonUp, StyledContainer } from "./style";

const PageUp = () => {
	const [isVisible, setIsVisible] = useState(false);
	const handleUp = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	useEffect(() => {
		document.addEventListener("scroll", () => {
			if (window.pageYOffset > 100) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		});
	}, []);

	return (
		<>
			{isVisible && (
				<StyledContainer>
					<StyledButtonUp onClick={handleUp}>
						<IconUp />
					</StyledButtonUp>
				</StyledContainer>
			)}
		</>
	);
};

export default PageUp;
