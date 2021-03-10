import React from "react";
import { Switch } from "react-router-dom";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Login from "../pages/Login";
import Groups from "../pages/Groups";
import Habits from "../pages/Habits";
import Route from "./route";

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={Login} />
			<Route path="/home" exact component={Home} isPrivate />
			<Route path="/users" exact component={Users} isPrivate />
			<Route path="/habits" exact component={Habits} isPrivate />
			<Route path="/groups" component={Groups} isPrivate />
		</Switch>
	);
};

export default Routes;
