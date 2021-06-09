import React from "react"
import {
    SafeAreaView,
    StyleSheet,
    Image,
    TouchableOpacity,
    Animated,
    View,
    Text
} from "react-native"
import {isIphoneX} from "react-native-iphone-x-helper"
import {
    COLORS,
    images,
    FONTS,
    SIZES, 
    icons
} from "../constants"


const Restaurant = ({ route }) => {
    const [restaurant, setRestaurant] = React.useState(null)
    const [currentLocation, setCurrentLocation] = React.useState(null)

    React.useEffect(() => {
        let {item, currentLocation} = route.params
        setRestaurant(item)
        setCurrentLocation(currentLocation)
    })

    return (
        <View></View>
    )
}

export default Restaurant; 