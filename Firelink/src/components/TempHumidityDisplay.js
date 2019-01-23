//TempHumidityDisplay.js
import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { Card, Badge, CardItem, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';


export default class TempHumidityDisplay extends Component{

	constructor(props){
		super(props);
		
		this.state = {
			loading: true,
			lowesttemp: 0,
			lowesttemproom: '',
			highesttemp: 0,
			highesttemproom: '',
			averagetemp: 0,
		}
		this.handleOnClick = this.handleOnClick.bind(this);
	}

	componentDidMount(){
		//debugger;
		fetch('http://climaedu.com/api/getHomeScreenData')
		.then(response => response.json())
		.then(data => {
			//debugger;
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



	handleOnClick(){
		fetch('http://climaedu.com/api/getCurrentTemperature')
		.then(response => response.json())
		.then(data => {
			console.log(data);
			this.setState({
				loading: false,
				temperatureC: data[0].Temperature,
				humidity: data[0].Humidity,
				room: data[0].Name,
				})
		});
	}

	convertCelciusToFarenheit(tempInCelcius){
		//debugger;
		return tempInCelcius * 9/5 + 32
	}

  render() {

  	//debugger;
  	let lowesttemproom = this.state.lowesttemproom;//this.convertCelciusToFarenheit(this.state.lowesttemproom);
    return (

    	<Container
    	containerstyle={styles.containerstyle}
    	style={styles.containerstyle}>
	        <Header>
	          <Left>
	            <Button transparent>
	              <Icon name='menu' />
	            </Button>
	          </Left>
	          <Body>
	            <Title>Header</Title>
	          </Body>
	          <Right />
	        </Header>
	        <Content style={{width: "100%"}}>
	          
	            <View>
					<Text>Temperature</Text>
					<Text>Test {lowesttemproom} {this.state.loading}</Text>
					<Text>Humidity</Text>
					<Text>{this.state.highesttemproom}</Text>

					<Button onPress={this.handleOnClick} title="Update Information"/>
					<Button bordered danger>
		            	<Text>Danger</Text>
		          	</Button>
				</View>
				<Card>
		            <CardItem>
		              <Body>
		                <Text>
		                   Card Test
		                </Text>
		              </Body>
		            </CardItem>
		         </Card>
		         <Badge success>
		            <Text>2</Text>
		          </Badge>
		          <View style={{width: "50%", height: "15%", alignItems: "center", backgroundColor: "#47DC3E"}}>
		          	<Text>Hello Rony</Text>
		          </View>
	        </Content>
	        <Footer>


	          <FooterTab>
	            <Button full>
	              <Text>Footer</Text>
	            </Button>
	          </FooterTab>


	        </Footer>
	      </Container>
		
    	);
	}

}

const styles = StyleSheet.create({
	containerstyle:{
		flex: 1,
		width: '100%',
		height: '100%',
		alignItems: 'center',
		alignSelf: 'center',

	},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b0c4de',
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







