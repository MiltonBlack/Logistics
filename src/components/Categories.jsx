import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Rest from '../assets/Images/restu.jpeg'

const Categories = () => {
    return (
        <View style={styles.catCard}>
            <Image source={Rest} style={styles.catImg} />
            <Text style={styles.catDesc}>Categories</Text>
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    catCard: {
        display: 'flex',
        flexDirection: 'column',
        width: 75,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        shadowOpacity: .4,
        shadowRadius: 20
    },
    catImg: {
        width: '80%',
        height: '100%',
    },
    catDesc: {
        height: '20%',
        textAlign: 'center',
        fontWeight: '600',
        color:'black'
    }
})