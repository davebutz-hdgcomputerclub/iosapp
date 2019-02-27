//box.js
//Anything here is a comment
/*
This component renders a title, data and context
*/
import React, {Component} from 'react';


import {Platform, StyleSheet, View} from 'react-native';
import { Card, Badge, CardItem, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';


export default class ComputerClubBox extends Component{

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
	}

	render(){
		let theColor=this.props.color;
		debugger;
		return(
			<View style={{width: '100%', height: 40, backgroundColor: theColor}}>
				<Text>
					I am a box
				</Text>
			</View>
		)
	}
}

