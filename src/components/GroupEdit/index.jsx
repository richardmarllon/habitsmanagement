import {useUser} from "../../Providers/User"
import {useGroups} from "../../Providers/Groups"
import React, { useState } from "react";
import { Modal } from "antd";
import { TextField, Button } from "@material-ui/core";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { habitsAPI } from "../../services/api";
import {EditOutlined} from "@ant-design/icons"
import EditCardGroup from "../EditCardGrup";


const GroupEdit = () => {
    
    const {groups} = useGroups()  

   

    return <div>	

        {groups.map((group, index) => {
            <EditCardGroup key={group.id} group={group}/>
        })}
          


        </div>
}

export default GroupEdit