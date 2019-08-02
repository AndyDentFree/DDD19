//
//  DocTree
//  menuAnimation
//
//  Created by Andy Dent.
//  Copyright © 2018 Touchgram Pty Ltd. All rights reserved.
//

import { View, Image, TouchableOpacity, Animated, Easing, StyleSheet, Text } from "react-native"
import React from "react"


export default class DocTree extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
		this.state = {
			addItemMenuPopupViewTranslateY: new Animated.Value(-1),
			addItemMenuPopupViewOpacity: new Animated.Value(-1),
		}
	}

	componentDidMount() {
	
	}

	onAddItemMenuPressed = () => {
	
		this.startAnimationOne()
	}

	onAddCameraItemPressed = () => {
	
		this.startAnimationTwo()
	}

	startAnimationOne() {
	
		// Set animation initial values to all animated properties
		this.state.addItemMenuPopupViewTranslateY.setValue(0)
		this.state.addItemMenuPopupViewOpacity.setValue(0)
		
		// Configure animation and trigger
		Animated.parallel([Animated.parallel([Animated.timing(this.state.addItemMenuPopupViewTranslateY, {
			duration: 1000,
			easing: Easing.bezier(0.22, 0.61, 0.61, 1),
			toValue: 1,
		}), Animated.timing(this.state.addItemMenuPopupViewOpacity, {
			duration: 1000,
			easing: Easing.bezier(0.22, 0.61, 0.61, 1),
			toValue: 1,
		})])]).start()
	}

	startAnimationTwo() {
	
		// Set animation initial values to all animated properties
		this.state.addItemMenuPopupViewTranslateY.setValue(0)
		this.state.addItemMenuPopupViewOpacity.setValue(0)
		
		// Configure animation and trigger
		Animated.parallel([Animated.parallel([Animated.timing(this.state.addItemMenuPopupViewTranslateY, {
			duration: 1000,
			easing: Easing.bezier(0.22, 0.61, 0.61, 1),
			toValue: 1,
		}), Animated.timing(this.state.addItemMenuPopupViewOpacity, {
			duration: 1000,
			easing: Easing.bezier(0.22, 0.61, 0.61, 1),
			toValue: 1,
		})])]).start()
	}

	render() {
	
		return <View
				style={styles.doctreeView}>
				<Animated.View
					style={[{
						opacity: this.state.addItemMenuPopupViewOpacity.interpolate({
							inputRange: [-1, 0, 0.4, 1],
							outputRange: [1, 1, 1, 0],
						}),
						transform: [{
							translateY: this.state.addItemMenuPopupViewTranslateY.interpolate({
								inputRange: [-1, 0, 0.6, 0.75, 0.9, 1],
								outputRange: [0.01, 3000, -25, 10, -5, 0],
							}),
						}, {
							translateY: this.state.addItemMenuPopupViewTranslateY.interpolate({
								inputRange: [-1, 0, 0.2, 0.4, 0.45, 1],
								outputRange: [0.01, 0, 10, -20, -20, 2000],
							}),
						}],
					}, styles.addItemMenuPopupViewAnimated]}>
					<View
						style={styles.addItemMenuPopupView}>
						<TouchableOpacity
							onPress={this.onAddCameraItemPressed}
							style={styles.addCameraItemButton}/>
						<Image
							source={require("./../../assets/images/add-photo-item.png")}
							style={styles.addPhotoItemImage}/>
						<Image
							source={require("./../../assets/images/add-downloaded-item.png")}
							style={styles.addDownloadedItemImage}/>
						<Image
							source={require("./../../assets/images/add-paint-item.png")}
							style={styles.addPaintItemImage}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/add-text-item.png")}
							style={styles.addTextItemImage}/>
					</View>
				</Animated.View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.composerToolbarView}>
					<Image
						source={require("./../../assets/images/scenes-menu.png")}
						style={styles.scenesMenuImage}/>
					<TouchableOpacity
						onPress={this.onAddItemMenuPressed}
						style={styles.addItemMenuButton}/>
					<Image
						source={require("./../../assets/images/tools.png")}
						style={styles.toolsImage}/>
					<View
						style={{
							flex: 1,
						}}/>
					<Image
						source={require("./../../assets/images/play.png")}
						style={styles.playImage}/>
					<Image
						source={require("./../../assets/images/send.png")}
						style={styles.sendImage}/>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	doctreeView: {
		backgroundColor: "white",
		flex: 1,
	},
	addItemMenuPopupView: {
		backgroundColor: "rgb(240, 246, 246)",
		width: "100%",
		height: "100%",
	},
	addItemMenuPopupViewAnimated: {
		height: 459,
		marginLeft: 43,
		marginRight: 220,
		marginTop: 47,
	},
	addCameraItemButtonImage: {
		resizeMode: "contain",
	},
	addCameraItemButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		height: 76,
		marginLeft: 18,
		marginRight: 18,
		marginTop: 15,
	},
	addCameraItemButtonText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	addPhotoItemImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 64,
		marginLeft: 17,
		marginRight: 19,
		marginTop: 16,
	},
	addDownloadedItemImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 68,
		marginLeft: 15,
		marginRight: 17,
		marginTop: 16,
	},
	addPaintItemImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 76,
		marginLeft: 18,
		marginRight: 18,
		marginTop: 16,
	},
	addTextItemImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 76,
		marginLeft: 17,
		marginRight: 19,
		marginBottom: 20,
	},
	composerToolbarView: {
		backgroundColor: "rgb(240, 246, 246)",
		height: 70,
		flexDirection: "row",
		alignItems: "center",
	},
	scenesMenuImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 48,
		height: 48,
		marginLeft: 11,
	},
	addItemMenuButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 48,
		height: 48,
		marginLeft: 16,
	},
	addItemMenuButtonText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	addItemMenuButtonImage: {
		resizeMode: "contain",
	},
	toolsImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 48,
		height: 48,
		marginLeft: 16,
	},
	playImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 48,
		height: 48,
		marginRight: 16,
	},
	sendImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 48,
		height: 48,
		marginRight: 60,
	},
})
