import React from "react";
import { AppRegistry, View, StatusBar,StyleSheet,Text as NativeText } from "react-native";
import { NavigationActions } from "react-navigation";
import Timeline from 'react-native-timeline-listview'


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
  constructor(){
    super()
    this.data = [
      {time: '1', title: 'BaseInfo', description: 'Manufacture: ', circleColor: '#5BB75B',lineColor:'#5BB75B'},
      {time: '2', title: 'Inspection', description: 'The instrument is appropriate to area ', circleColor: '#5BB75B',lineColor:'#5BB75B'},
      {time: '3', title: 'Filed Instrument', circleColor: '#eee',lineColor:'#eee'},
      {time: '4', title: 'In-line Installed', description: 'Team sport played between two teams of eleven players with a spherical ball. ', circleColor: '#eee',lineColor:'#eee'},
      {time: '5', title: 'Verify the instrument', description: 'Look out for the Best Gym & Fitness Centers around me :)', circleColor: '#eee',lineColor:'#eee'}
    ]
  }

  render() {
    return (
      <Container>
        <Header
        style={{ backgroundColor: "#FAA732" }}>
          <Left>
            <Button transparent  onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-arrow-back" style = {{color:"#fff"}}/>
            </Button>
          </Left>
          <Body>
            <Title>ConfirmFiled</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Timeline
          style={styles.list}
          data={this.data}
          circleSize={16}
          separator = {true}
          circleColor='rgb(45,156,219)'
          lineColor='rgb(45,156,219)'
          showTime={false}
          timeContainerStyle={{minWidth:0, marginTop: -5}}
          timeStyle={{textAlign: 'center', backgroundColor:'#ff9797',color:'white', padding:0, borderRadius:13}}
          descriptionStyle={{color:'gray'}}
          options={{
            style:{paddingTop:5},
          }}
          onEventPress = {() => this.props.navigation.navigate("ConfirmDetail")}
          innerCircle={'dot'}
        />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
		paddingTop:65,
    backgroundColor:'white'
  },
  list: {
    flex: 1,
    marginTop:20,
  },
});
