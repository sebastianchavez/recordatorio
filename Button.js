import React from 'react'
import { TouchableHighlight, Text, StyleSheet, View } from 'react-native'

export default function Button({title, onPress}) {
    return (
        
            <TouchableHighlight style={styles.btn} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
            </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor: 'blue',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 5
    },
    text:{
        color: '#fff',
        fontSize: 18
    }
})