import { Menu, Button } from "antd";
import { useUser } from "../../Providers/User";

import {
	UnorderedListOutlined,
	WechatFilled,
	ScheduleFilled,
	HomeFilled,
	LogoutOutlined,
	LoginOutlined,
	FormOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const MenuComponent = () => {
	const { userToken } = useUser();
	const { SubMenu } = Menu;
	const [collapsed, setCollapsed] = useState(false);
	const [subMenu, setSubMenu] = useState(false);

	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
		setSubMenu(false);
	};

	const toggleSubMenu = () => {
		setSubMenu(true);
	};

	return (
		<div style={{ width: "80px" }}>
			<Button
				type="primary"
				onClick={toggleCollapsed}
				style={{
					height: "100%",
					backgroundColor: "transparent",
					border: "none",
					margin: 0,
					paddingLeft: "7px",
					paddingTop: "12px",
				}}
			>
				<UnorderedListOutlined style={{ fontSize: "40px" }} />
			</Button>
			{collapsed && (
				<Menu
					defaultSelectedKeys={["1"]}
					defaultOpenKeys={["sub1"]}
					mode="inline"
					theme="dark"
					inlineCollapsed={collapsed}
				>
					{userToken ? (
						<>
							<Menu.Item key="1" icon={<HomeFilled />}>
								HOME
							</Menu.Item>
							<SubMenu
								key="sub1"
								icon={<WechatFilled />}
								title="GRUPOS"
								onTitleClick={toggleSubMenu}
							>
								{subMenu && (
									<>
										<Menu.Item key="2">SEU GRUPO</Menu.Item>
										<Menu.Item key="3">PESQUISAR GRUPOS</Menu.Item>
									</>
								)}
							</SubMenu>
							<Menu.Item key="4" icon={<ScheduleFilled />}>
								HÁBITOS
							</Menu.Item>
							<Menu.Item key="5" icon={<LogoutOutlined />}>
								SAIR
							</Menu.Item>
						</>
					) : (
						<>
							<Menu.Item key="6" icon={<LoginOutlined />}>
								LOGIN
							</Menu.Item>
							<Menu.Item key="7" icon={<FormOutlined />}>
								REGISTRAR
							</Menu.Item>
						</>
					)}
				</Menu>
			)}
		</div>
	);
};

export default MenuComponent;
