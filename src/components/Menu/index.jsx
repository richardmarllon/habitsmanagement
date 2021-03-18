import { Menu } from "antd";
import { useUser } from "../../Providers/User";
import {
	MenuContainer,
	ButtonMenuContainer,
	ButtonMenuOpen,
	IconMenuContainer,
} from "./style";
import {
	WechatFilled,
	ScheduleFilled,
	HomeFilled,
	LogoutOutlined,
	LoginOutlined,
	FormOutlined,
	TeamOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const MenuComponent = (props) => {
	const history = useHistory();
	const { userToken } = useUser();
	const [collapsed, setCollapsed] = useState(false);

	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};

	return (
		<ButtonMenuContainer>
			<ButtonMenuOpen
				type="primary"
				onClick={() => {
					toggleCollapsed();
				}}
			>
				<IconMenuContainer />
			</ButtonMenuOpen>
			{collapsed && (
				<MenuContainer>
					<Menu defaultSelectedKeys={["1"]} mode="inline" theme="dark">
						{userToken ? (
							<>
								<Menu.Item
									key="1"
									icon={<HomeFilled />}
									onClick={() => {
										history.push("/home");
									}}
								></Menu.Item>

								<Menu.Item
									key="2"
									icon={<WechatFilled />}
									title="GRUPOS"
									onTitleClick={() => {
										history.push("/groups");
									}}
								></Menu.Item>
								<Menu.Item
									key="3"
									icon={<TeamOutlined />}
									onClick={() => {
										history.push("/users");
									}}
								></Menu.Item>
								<Menu.Item
									key="4"
									icon={<LogoutOutlined />}
									onClick={props.clearToken}
								></Menu.Item>
							</>
						) : (
							<>
								<Menu.Item
									icon={<LoginOutlined />}
									onClick={() => {
										history.push("/");
									}}
								></Menu.Item>
								<Menu.Item
									icon={<FormOutlined />}
									onClick={() => {
										history.push("/");
									}}
								></Menu.Item>
							</>
						)}
					</Menu>
				</MenuContainer>
			)}
		</ButtonMenuContainer>
	);
};

export default MenuComponent;
