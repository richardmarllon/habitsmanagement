import { useState } from "react";
import { Modal } from "antd";
import { Button } from "antd";
import { OpenGroupButton, GroupFormModalContainer } from "./style";
import { PlusCircleOutlined } from "@ant-design/icons";
import GroupForm from "../GroupForm ";

const GroupFormModal = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<GroupFormModalContainer>
			<OpenGroupButton type="primary" onClick={showModal}>
				Criar novo grupo <PlusCircleOutlined />
			</OpenGroupButton>
			<Modal
				title="Criar grupo"
				visible={isModalVisible}
				onCancel={handleCancel}
				onOk={() => setIsModalVisible(false)}
				footer={[
					<Button type="primary" onClick={handleCancel}>
						Fechar
					</Button>,
				]}
			>
				<GroupForm modal setIsModalVisible={setIsModalVisible} />
			</Modal>
		</GroupFormModalContainer>
	);
};

export default GroupFormModal;
