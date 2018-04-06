import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Picker,
  TouchableOpacity,
  Image
} from 'react-native';

import {
  Button,
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

import Swiper from 'react-native-swiper';

import ImagePicker from 'react-native-image-crop-picker';

import UploadImagePickList from "../../components/UploadImagePickList/index.js"

var options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};


export default class SwiperA extends Component {

  constructor(){
    super()
    this.state = {
      showToast: false,
      showCommit : false,
      avatarSource : null ,
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
              value : "default",
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

        },
        {

        },
        {

        },
        {

        }
      ]
    }

  }

  prev = () => {
    this.swiper.forceLeftSwipe();
  }

  next = () => {
    this.swiper.forceRightSwipe();
  }

  render(){
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
            <Title>ConfirmFiled</Title>
          </Body>
          <Right />
        </Header>
        <Swiper onIndexChanged={ (index)=>{ this.setState({showCommit: ( index + 1) == this.state.ConfirmList.length ? true : false}) } } loop={false} autoplay={false} style={styles.wrapper} showsButtons={false}>
        {
          that.state.ConfirmList.map( (item,index) => {
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

                    <Text style={styles.descript}>
                      {item.descript}
                    </Text>

                    <UploadImagePickList />

                    <Item stackedLabel >
                      <Label>Note:</Label>
                      <Input  onChangeText = { (value)=> {
                      }}/>
                    </Item>

                    <Picker
                      selectedValue={this.state.language}
                      onValueChange={(lang) => this.setState({language: lang})}>
                      <Picker.Item label="Ok" value="Ok" />
                      <Picker.Item label="PL" value="PL" />
                      <Picker.Item label="N/A" value="N/A" />
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
        {
          this.state.showCommit ?
          (
            <Right>
              <TouchableOpacity onPress={this.next} style={styles.btn}>
                <Text style={styles.btnText}>Commit</Text>
              </TouchableOpacity>
            </Right>
          )
          :
          (
            <View></View>
          )
        }
        </View>

      </Container>

    );
  }
}

const styles = StyleSheet.create({
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
    color: '#DA4F49',
    marginTop:3,
    fontSize: 23,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center'
  },
  descript:{
    color: '#666',
    fontSize: 18,
    paddingLeft:12,
    paddingTop:18,

  },
  buttonContainer: {
   flexDirection: 'row',
   position: 'absolute',
   justifyContent: 'space-between',
   bottom: 5,
   left: 0,
   right: 0,
   padding: 5,
 },
 btn: {
   height: 35,
   width: 80,
   borderRadius:5,
   backgroundColor: '#DA4F49',
   justifyContent: 'center',
   alignItems: 'center',
 },
 btnText: {
   color: '#FFF'
 },
})
