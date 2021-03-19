import React from "react";
import { Switch } from "react-router-dom";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Login from "../pages/Login";
import Groups from "../pages/Groups";
import Route from "./route";
import Page404 from "../pages/404";
import { Route as RouteNotFound } from "react-router-dom";

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={Login} />
			<Route path="/home" exact component={Home} isPrivate />
			<Route path="/users" exact component={Users} isPrivate />
			<Route path="/groups" component={Groups} isPrivate />
			<RouteNotFound>
				<Page404 />
			</RouteNotFound>
		</Switch>
	);
};

export default Routes;
