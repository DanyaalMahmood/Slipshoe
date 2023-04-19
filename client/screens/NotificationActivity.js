import { Image, View, StyleSheet, Pressable, Text, TextInput } from "react-native";
import StarRating from 'react-native-star-rating';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default NotificationActivity = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Pressable onPress={() => navigation.navigate('Notification')}>
                    <Icon name="chevron-back-outline" size={30} color="#9098B1" />
                </Pressable>
                <Text style={styles.reviewText}>Activity</Text>
                <View style={styles.emptyView} />
            </View>
            <View style={styles.line} />
            <View style={styles.box}>
                <Icon name="swap-vertical-outline" size={25} color="#40BFFF" style={{ transform: [{ scaleX: -1 }, { rotate: '-45deg' }] }} />
                <View style={styles.textContainer}>
                    <Text style={styles.writingTitle}>Transaction Nike Air Zoom Product</Text>
                    <Text style={styles.writing}>Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo</Text>
                    <Text style={styles.date}>April 19, 2023</Text>
                </View>
            </View>
            <View style={styles.box}>
                <Icon name="swap-vertical-outline" size={25} color="#40BFFF" style={{ transform: [{ scaleX: -1 }, { rotate: '-45deg' }] }} />
                <View style={styles.textContainer}>
                    <Text style={styles.writingTitle}>Transaction Nike Air Zoom Pegasus 36 Miami</Text>
                    <Text style={styles.writing}>Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor</Text>
                    <Text style={styles.date}>March 21, 2023</Text>
                </View>
            </View>
            <View style={styles.box}>
                <Icon name="swap-vertical-outline" size={25} color="#40BFFF" style={{ transform: [{ scaleX: -1 }, { rotate: '-45deg' }] }} />
                <View style={styles.textContainer}>
                    <Text style={styles.writingTitle}>Transaction Nike Air Zoom Product</Text>
                    <Text style={styles.writing}>Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo</Text>
                    <Text style={styles.date}>April 19, 2023</Text>
                </View>
            </View>
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
        paddingTop: 10,
        flexDirection: "row",
        alignItems: "flex-start",
        paddingHorizontal: 20,
        paddingRight: 10,
        width: "100%",
        flexWrap: 'wrap',
        marginBottom: 20
    },

    textContainer: {
        flex: 1,
        marginLeft: 20
    },
    writingTitle: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#223263",
        marginBottom: 5,
    },
    writing: {
        fontSize: 12,
        color: "#9098B1",
        fontWeight: 400,
    },
    date: {
        fontSize: 12,
        color: "#9098B1",
        fontWeight: 'bold',
        marginTop: 10
    },
});
