import React, { useState } from "react";
import { Modal, Button } from "antd";
import { SpinStyled, StyledButton, StyledIconButton } from "./style";
import { habitsAPI } from "../../services/api";
import { Collapse } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const UserDetailsModal = ({ user, groupsPage = false }) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [userGroup, setUserGroup] = useState({});
	const [showLoad, SetShowLoad] = useState(true);
	const { Panel } = Collapse;
	const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

	const getUserGroup = async () => {
		let response = await habitsAPI.get(`groups/${user.group}/`);
		setUserGroup(response.data);
		SetShowLoad(false);
	};

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	return (
		<>
			{groupsPage ? (
				<StyledIconButton onClick={showModal}>
					<img
						alt="user avatar"
						src={
							user.id % 2 === 0
								? "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
								: "https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png"
						}
						title={user.username}
					/>
				</StyledIconButton>
			) : (
				<StyledButton variant="outlined" onClick={showModal}>
					Detalhes
				</StyledButton>
			)}
			<Modal
				title={`Usuário: ${user.username}`}
				visible={isModalVisible}
				onCancel={handleOk}
				footer={[
					<Button type="primary" onClick={handleOk}>
						Fechar
					</Button>,
				]}
			>
				<p>ID: {user.id}</p>
				<p>Email: {user.email}</p>
				{user.group && (
					<Collapse
						accordion={true}
						onChange={() => {
							getUserGroup();
						}}
					>
						<Panel header="Exibir detalhes do grupo">
							{showLoad && <SpinStyled indicator={antIcon} />}
							{userGroup.name && <p>Nome: {userGroup.name}</p>}
							{userGroup.description && (
								<p>Descrição: {userGroup.description}</p>
							)}

							{userGroup.users && (
								<p>Quantidade de participantes: {userGroup.users.length}</p>
							)}
						</Panel>
					</Collapse>
				)}
			</Modal>
		</>
	);
};

export default UserDetailsModal;
