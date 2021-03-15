import React, { useState } from "react";
import { Modal, Button } from "antd";
import { SpinStyled, StyledButton } from "./style";
import { useEffect } from "react";
import { habitsAPI } from "../../services/api";
import { Collapse } from "antd";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const UserDetailsModal = ({ user }) => {
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
			<StyledButton variant="outlined" onClick={showModal}>
				Detalhes
			</StyledButton>
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
