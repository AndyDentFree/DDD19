//
//  App.js
//  menuAnimation
//
//  Created by Andy Dent.
//  Copyright © 2018 Touchgram Pty Ltd. All rights reserved.
//

import React from "react"
import { createStackNavigator, createAppContainer } from "react-navigation"
import DocTree from "./App/DocTree/DocTree"
import { Font, DangerZone } from "expo"

const PushRouteOne = createStackNavigator({
	DocTree: {
		screen: DocTree,
	},
}, {
	initialRouteName: "DocTree",
})

const RootNavigator = createStackNavigator({
	PushRouteOne: {
		screen: PushRouteOne,
	},
}, {
	mode: "modal",
	headerMode: "none",
	initialRouteName: "PushRouteOne",
})

const AppContainer = createAppContainer(RootNavigator)



export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			fontsReady: false,
		}
	}

	componentDidMount() {
	
		this.initProjectFonts()
	}

	async initProjectFonts() {
	
		await Font.loadAsync({
			".SFNSText": require("./assets/fonts/SFNSText.ttf"),
		})
		this.setState({
			fontsReady: true,
		})
	}

	render() {
	
		if (!this.state.fontsReady) { return (<Expo.AppLoading/>); }
		return <AppContainer/>
	}
}
