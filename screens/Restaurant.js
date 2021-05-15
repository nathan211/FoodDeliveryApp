import React, { useState } from 'react'
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Animated
} from 'react-native'
import { isIphoneX } from 'react-native-iphone-x-helper'

import { icons, COLORS, SIZES, FONTS } from '../constants'

const Restaurant = ({ navigation }) => {
    const [restaurant, setRestaurant] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);

    const renderHeader = () => (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity 
                style={{
                    width: 50,
                    paddingLeft: SIZES.padding * 2,
                    justifyContent: 'center'
                }}
                onPress={() => navigation.goBack()}
            >
                <Image 
                    source={icons.back}
                    style={{
                        width: 30,
                        height: 30
                    }}
                />
            </TouchableOpacity>
        </View>
    )

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    }
})

export default Restaurant