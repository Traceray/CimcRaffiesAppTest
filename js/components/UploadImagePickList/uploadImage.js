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

import platform  from "../../../native-base-theme/variables/platform.js"

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

import ImagePicker from 'react-native-image-crop-picker';

export default class UploadImage extends Component {

  constructor(){
    super()
    this.state={
      avatarSource : null,
      width : ( platform.deviceWidth - 44 )/3 || 100,
      height : ( platform.deviceWidth - 44 )/3 || 100
    }
  }

  render() {
    const {width,height} = this.state;
    return (
      <View>

        {
          this.state.avatarSource ?
          <Image source={this.state.avatarSource} style={{width: width ,height:height}} />
          :
          <View  style={{width: width ,height:height,backgroundColor:"#eee",marginRight:1,marginBottom:1}} >
            <Button transparent primary style={{flex : 1}} onPress={ ()=> {

              // ImagePicker.openCamera({
              //   width: 300,
              //   height: 400,
              //   cropping: true
              // }).then(image => {
              //   console.log(image);
              //   this.setState({
              //     avatarSource : {uri: image.path, width: image.width, height: image.height, mime: image.mime},
              //   })
              // });

              ImagePicker.openPicker({
                width: 300,
                height: 400,
                cropping: true
              }).then(image => {
                console.log(image)
                this.setState({
                  avatarSource : {uri: image.path, width: image.width, height: image.height, mime: image.mime},
                })
              });

            }}>
              <Icon name='image' style={{fontSize:46,marginLeft:25,color:"#FAA732"}}/>
            </Button>
          </View>
        }

      </View>
    );
  }
}

const styles = StyleSheet.create({

})
