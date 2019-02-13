/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, ActivityIndicator,View} from 'react-native';
import Temp from './src/components/TempHumidityDisplay';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer, Accordion} from 'native-base';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};


 
export default class App extends Component<Props> {
  constructor(props){
    console.log("I am building an APP class");
    super(props);
    
    this.state = {
      loading: true,
      lowesttemp: 0,
      lowesttemproom: '',
      highesttemp: 0,
      highesttemproom: '',
      averagetemp: 0,
    }
 
  }

  componentDidMount(){
    console.log("I am finished loading an APP class");
    fetch('http://climaedu.com/api/getLandingPageSummaryInformation')
    .then(response => response.json())
    .then(data => {
      debugger;
      console.log(data);
      this.setState({
        loading: false,
        lowesttemp: data.LowestTemp,
        lowesttemproom: data.LowestTempRoomName,
        highesttemp: data.HighestTemp,
        highesttemproom: data.HighestTempRoomName,
        averagetemp: data.AverageTemperature,
        })
    });
  }

  closeDrawer() {
    this.drawer._root.close()
  }
  openDrawer() {
    this.drawer._root.open()
  }


  render() {

    let dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];
    return (
      <Container contentContainerStyle={{ flexGrow: 1 }}>
          <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={
          <View style={{flex:1, width: '75%', height: '100%', backgroundColor: '#FFFFFF'}}>
            <View style={{flex:1, height: '10%', flexWrap: 'nowrap', backgroundColor: '#FFC300'}}>


<Text> Top </Text>

            </View>
            <View style={{flex:1, height: '100%', width: '100%', backgroundColor: '#FFFFFF'}}>
             <Text>ClimaEdu</Text>
            </View>
        </View>
      }
        onClose={() => this.closeDrawer()} >
          <Content contentContainerStyle={{ flexGrow: 1 }} style={{flex:1, width: '100%', height: '100%', backgroundColor: '#FFFFFF'}}> 
          <Header>
          <Left>
            <Button transparent
            onPress={() => {
              console.log("hi");
              this.openDrawer();
            }}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title><Text>ClimaEdu</Text></Title>
          </Body>
          <Right />
        </Header>
        <Content style={{flex:1, width: '100%', height: '100%', backgroundColor: '#70082C'}}>


          <View style={styles.container}>
                <Text>Loading</Text>
                <ActivityIndicator size="large" />

              </View>
              <Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
          </Content>
            </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Drawer>
        
      </Container>
    );
  }
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    color: 'crimson',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

  