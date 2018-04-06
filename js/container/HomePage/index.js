import React, { Component } from "react";
import LucyChat from "../TodoList/index.js";
import JadeChat from "../DoneList/index.js";
import NineChat from "../Profile/index.js";
import { TabNavigator } from "react-navigation";
import {
  Button,
  Text,
  Icon,
  Item,
  Footer,
  FooterTab,
  Label
} from "native-base";
export default (MainScreenNavigator = TabNavigator(
  {
    LucyChat: { screen: props => <LucyChat {...props} /> },
    JadeChat: { screen: props => <JadeChat {...props} /> },
    NineChat: { screen: props => <NineChat {...props} /> }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("LucyChat")}
            >
              <Icon name="bowtie" />
              <Text>Check</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("JadeChat")}
            >
              <Icon name="briefcase" />
              <Text>Done</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("NineChat")}
            >
              <Icon name="headset" />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));
