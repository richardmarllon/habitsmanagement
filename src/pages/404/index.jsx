import { startOfDay } from "date-fns/esm";
import Header from "../../components/Header";
import NotFound from "../../components/NotFound";

const Page404 = () => {
	return (
		<>
			{/* <Header pageName={"Not Found!"} /> */}
			<NotFound />
		</>
	);
};

export default Page404;
