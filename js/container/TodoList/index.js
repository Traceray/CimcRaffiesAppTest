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

export default class JadeChat extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header
        style={{ backgroundColor: "#49afcd" }}
        >
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" style={{color:"#eee"}} />
            </Button>
          </Left>
          <Body>
            <Title>校验单</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>

          <Card >
              <CardItem header style={{height:35}}>
                <Left >
                  <Text style={{color:"#DA4F49",fontWeight:"600",fontSize:20,marginLeft:0}}>I-203-63</Text>
                </Left>
                <Right>
                  <Button transparent textStyle={{color: '#eee'}} onPress={() => this.props.navigation.navigate("ConfirmFiled")}>
                    <Icon name="eye" style={{fontSize:32,color:"#363636"}}/>
                  </Button>
                </Right>
              </CardItem>
              <CardItem>
                <Body>
                  <Text style={{color:"#000",fontSize:16,marginLeft:8}}>
                    描述信息 尽快处理
                  </Text>
                </Body>
              </CardItem>
              <CardItem style={{height:30}}>
                 <Right>
                   <Button transparent textStyle={{color: '#eee'}}>
                     <Icon name="person" style={{fontSize:16,color:"#000"}}/>
                     <Text style={{color:"#999",fontSize:12,marginLeft:5}}>Trac</Text>
                   </Button>
                 </Right>
               </CardItem>
           </Card>

        </Content>
      </Container>
    );
  }
}
