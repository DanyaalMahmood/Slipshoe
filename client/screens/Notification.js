import { Image, View, StyleSheet, Pressable, Text, TextInput } from "react-native";
import StarRating from 'react-native-star-rating';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default Notification = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Pressable onPress={() => navigation.navigate('Notification')}>
                    <Icon name="chevron-back-outline" size={30} color="#9098B1" />
                </Pressable>
                <Text style={styles.reviewText}>Notification</Text>
                <View style={styles.emptyView} />
            </View>
            <View style={styles.line} />
            <Pressable onPress={() => { navigation.navigate('NotificationOffer') }}>
                <View style={styles.box}>
                    <Icon name="pricetag-outline" size={22} color="#40BFFF" style={{ transform: [{ rotateY: '180deg' }] }} />
                    <Text style={styles.writing}>Offer</Text>
                    <View style={styles.notificationCount}>
                        <Icon name="ellipse" size={25} color="#FB7181" />
                        <Text style={styles.notificationCountText}>3</Text>
                    </View>
                </View>
            </Pressable>
            <Pressable onPress={() => { navigation.navigate('NotificationFeed') }}>
                <View style={styles.box}>
                    <Icon name="newspaper-outline" size={22} color="#40BFFF" style={{ transform: [{ rotateY: '180deg' }] }} />
                    <Text style={styles.writing}>Feed</Text>
                    <View style={styles.notificationCount}>
                        <Icon name="ellipse" size={25} color="#FB7181" />
                        <Text style={styles.notificationCountText}>3</Text>
                    </View>
                </View>
            </Pressable>
            <Pressable onPress={() => { navigation.navigate('NotificationActivity') }}>
                <View style={styles.box}>
                    <Icon name="notifications-outline" size={22} color="#40BFFF" style={{ transform: [{ rotateY: '180deg' }] }} />
                    <Text style={styles.writing}>Activity</Text>
                    <View style={styles.notificationCount}>
                        <Icon name="ellipse" size={25} color="#FB7181" />
                        <Text style={styles.notificationCountText}>3</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1
    },
    top: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 70,
        paddingBottom: 25,
    },
    emptyView: {
        width: 48,
    },
    line: {
        height: 0.5,
        backgroundColor: '#EBF0FF'
    },
    reviewText: {
        paddingLeft: 10,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "#223263",
    },
    box: {
        display: "flex",
        paddingTop: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingRight: 10,
        width: "100%",
    },
    writing: {
        fontSize: 13,
        fontWeight: "bold",
        margin: 20,
        color: "#223263",
    },
    notificationCount: {
        // backgroundColor: 'pink',
        flexDirection: "row",
        alignItems: "center",
        marginLeft: "auto",
    },
    notificationCountIcon: {
        marginRight: 5,
    },
    notificationCountText: {
        position: 'relative',
        left: -17,
        bottom: 1,
        color: "#fff",
    },
});
