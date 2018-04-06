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

import platform  from "../../../native-base-theme/variables/platform.js"

import ImagePicker from 'react-native-image-crop-picker';

import UploadImage from "./uploadImage.js";

import { Col, Row, Grid } from "react-native-easy-grid";

export default class UploadImagePickList extends Component {

  constructor(){
    super()
    this.state={
      list : [{},{},{},{},{},{}],
      width : ( platform.deviceWidth - 44 )/3 || 100,
      height : ( platform.deviceWidth - 44 )/3 || 100
    }
  }

  getRenderData(){
    var data = this.state.list;
    var result = [];
    for(var i=0,len=data.length;i<len;i+=3){
       result.push(data.slice(i,i+3));
    }
    return result;

  }

  render() {
    const {width,height,list} = this.state;
    return (
        <View style={{marginTop:16,marginLeft:6,marginRight:6}}>
          <Grid>
            {
              this.getRenderData().map( (item,i) => {
                return (
                  <Row key={i}>
                    {
                      item.map( (subItem,j) => {
                              return (
                                <View  key={j}>
                                  {
                                    list.length == ( 3 * i + j + 1) ?
                                    <View  style={{width: width ,height:height,backgroundColor:"#eee",marginRight:1,marginBottom:1}} >
                                      <Button transparent primary style={{flex : 1}} onPress={ ()=> {
                                        var list = this.state.list;
                                        list.push({})
                                        this.setState({
                                          list : list
                                        })
                                      }}>
                                        <Icon name='add' style={{fontSize:46,marginLeft:25,color:"#FAA732"}}/>
                                      </Button>
                                    </View>
                                    :
                                    <UploadImage />
                                  }
                                </View>
                              )
                          })
                    }
                  </Row>
                )
              })
            }
          </Grid>
        </View>
    );
  }
}

const styles = StyleSheet.create({

})
