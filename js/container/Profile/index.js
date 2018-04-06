import React from "react";
import { AppRegistry, View, StatusBar } from "react-native";
import { NavigationActions } from "react-navigation";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Input,
  InputGroup,
  Item,
  Tab,
  Tabs,
  Footer,
  FooterTab,
  Label
} from "native-base";

export default class LucyChat extends React.Component {
  render() {
    return (
      <Container>
        <Header
          style={{ backgroundColor: "#5BB75B" }}
        >
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Profile page </Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
            <Text>Profile page</Text>
        </Content>
      </Container>
    );
  }
}
