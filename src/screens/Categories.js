import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Categories  = () => {
    return (
        <View style={styles.screen}>
            <Text>The categories screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Categories