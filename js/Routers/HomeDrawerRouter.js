import React, { Component } from "react";
import HomePage from "../container/HomePage/index.js";
import SideBar from "../container/SideBar/index.js";
import ConfirmFiled from "../container/ConfirmField/index.js"
import ConfirmDetail from "../container/ConfirmDetail/index.js"
import { DrawerNavigator } from "react-navigation";

const HomeDrawerRouter = DrawerNavigator(
  {
    HomePage: { screen: HomePage },
    ConfirmFiled : { screen : ConfirmFiled },
    ConfirmDetail : { screen : ConfirmDetail },

  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeDrawerRouter;
