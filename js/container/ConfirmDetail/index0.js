import React from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Picker
} from 'react-native';

import Swiper from 'react-native-swiper-animated';
import { RadioButtons } from 'react-native-radio-buttons'

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
  Label,
  Toast,
  Form,
  ListItem,
  Radio
} from "native-base";


export default class ConfirmDetail extends React.Component {
  swiper = null;

  prev = () => {
    this.swiper.forceLeftSwipe();
  }

  next = () => {
    this.swiper.forceRightSwipe();
  }

  constructor(){
    super()

    this.state = {
      showToast: false,
      demo : "1",
      ConfirmList : [
        {
          type : "baseInfo",
          title: "baseInfo",
          descript : "baseInfo",
          fileds:[
            {
              name : "Manufacture",
              type : "text",
              value : "9635",
              _id : "dsdscxcx2131"
            },
            {
              name : "Ex Cert No",
              type : "text",
              value : ""
            },
            {
              name : "Model number",
              type : "text",
              value : ""
            },
            {
              name : "Serial No",
              type : "text",
              value : ""
            },
            {
              name : "Equipment Classification",
              type : "text",
              value : ""
            },
            {
              name : "Area Classification",
              type : "text",
              value : ""
            },
          ]
        },
        {
          type : "checkInfo",
          title : "checkInfo",
          descript : " Team sport played between two teams of eleven players with a spherical ball. ",

        }
      ]
    }

  }

  render() {
    var that = this;
    return (
      <Container>
        <Header
        style={{ backgroundColor: "#DA4F49" }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-arrow-back" style = {{color:"#fff"}}/>
            </Button>
          </Left>

          <Body>
            <Title>ConfirmFiled{this.state.demo}</Title>
          </Body>
          <Right />
        </Header>
        <Swiper
         ref={(swiper) => {
            this.swiper = swiper;
          }}
          style={styles.wrapper}
          paginationStyle={{ container: { backgroundColor: 'transparent' } }}
          paginationLeft={'返回'}
          paginationRight={''}
          backPressToBack
          // stackDepth = {6}
          paginationActiveDotColor = "#5BB75B"
          showPaginationBelow
          dragDownToBack = {true}
          // smoothTransition
          // stack
          index = {1}
          loop = {false}
          // renderCard = { (card)=>{
          //   return (
          //     card
          //   )
          // }}
          onFinish = {() => this.props.navigation.navigate("DrawerOpen")}
          scaleOthers = {false}
        >
          {
            this.state.ConfirmList.map( (item,index) => {
              if( item.type == "baseInfo" ){
                return (
                  <View style={styles.slide} key={index}>
                    <Content>
                      <Text style={styles.text}>{item.title}</Text>
                      <Form>
                          {
                            item.fileds.map( (fildItem,j) => {
                              return (
                                <Item stackedLabel key={j}>

                                  <Label>{fildItem.name } </Label>
                                  <Input defaultValue={fildItem.value}  onChangeText = { (value)=> {
                                    // console.warn(value);
                                    //更新Value值
                                    var data = this.state.ConfirmList;
                                    data[index]["fileds"][j]["value"] = value;
                                    // console.warn(JSON.stringify(data));
                                    that.setState({
                                      ConfirmList : data,
                                      demo : 6
                                    })
                                  }}/>

                                </Item>
                              )
                            })
                          }
                      </Form>

                    </Content>
                  </View>
                )
              }
              if( item.type == "checkInfo" ){
                return (
                  <View style={styles.slide} key={index}>
                    <Content>
                      <Text style={styles.text}>{item.title}</Text>

                        <Picker
                          selectedValue={this.state.language}
                          onValueChange={(lang) => this.setState({language: lang})}>
                          <Picker.Item label="Java" value="java" />
                          <Picker.Item label="JavaScript" value="js" />
                        </Picker>

                    </Content>




                  </View>
                )
              }

              return (
                <View style={styles.slide} key={index}>
                  <Body><Text style={styles.text}>NoneInfo - {index}</Text></Body>
                </View>
              )

            })
          }
        </Swiper>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.prev} style={styles.btn}>
            <Text style={styles.btnText}>PREVIOUS</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.next} style={styles.btn}>
            <Text style={styles.btnText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}


const styles = {
  wrapper: {
    backgroundColor: '#f3f3f3',
  },
  slide: {
    flex: 1,
    backgroundColor: '#ffffff',
    margin:16,
    marginBottom:66,
    borderRadius:16
  },
  text: {
    color: '#000',
    marginTop:3,
    fontSize: 22,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
  },
  buttonContainer: {
   flexDirection: 'row',
   position: 'absolute',
   justifyContent: 'space-between',
   bottom: 0,
   left: 0,
   right: 0,
   padding: 10,
 },
 btn: {
   height: 45,
   width: 100,
   backgroundColor: 'black',
   justifyContent: 'center',
   alignItems: 'center',
 },
 btnText: {
   color: '#FFF',
 },
};
