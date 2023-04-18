import { Image, View, StyleSheet, Pressable, Text, TextInput } from "react-native";
import StarRating from 'react-native-star-rating';
import React, { useState } from 'react';


export default WriteReview = ({ navigation, route }) => {
    const [rating, setRating] = useState(5);

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Pressable onPress={() => navigation.navigate('Login')}>
                    <Image style={styles.backImage} source={require('./../assets/back.png')} />
                </Pressable>
                <Text style={styles.reviewText}>Write Review</Text>
                <View style={styles.emptyView} />
            </View>
            <View style={styles.line} />
            <View style={styles.rating}>
                <Text style={styles.ratingText}>Please write Overall level of satisfaction with your shipping / Delivery Service</Text>
                <StarRating
                    disabled={false}
                    maxStars={5}
                    fullStarColor="#FFC833"
                    halfStarEnabled={true}
                    starSize={40}
                    rating={rating}
                    selectedStar={(rating) => setRating(rating)}
                />
                <Text style={styles.reviewText2}>Write your Review</Text>
                <TextInput style={styles.reviewInput} placeholder="Write your review here" multiline textAlignVertical='top' />
            </View>
            <View style={styles.addPhotoContainer}>
                <Text style={styles.addPhoto}>Add photo</Text>
                <Pressable onPress={() => { navigation.navigate('ReviewProduct') }}>
                    <Image style={styles.addImage} source={require('./../assets/addImage.png')} />
                </Pressable>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    top: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 70,
        paddingBottom: 25
    },
    emptyView: {
        width: 48
    },
    reviewText: {
        paddingLeft: 20,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#223263'
    },
    line: {
        height: 0.5,
        backgroundColor: 'grey'
    },
    rating: {
        padding: 16
    },
    ratingText: {
        color: '#223263',
        marginBottom: 30,
        fontWeight: 'bold',
        fontSize: 16,
    },
    reviewText2: {
        color: '#223263',
        marginTop: 20,
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 16,
    },
    reviewInput: {
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 4,
        padding: 8,
        paddingTop: 20,
        marginBottom: 16,
        minHeight: 160
    },
    backImage: {
        resizeMode: 'contain',
        backgroundColor: '#fff',
        width: 24,
        height: 24
    },
    addPhotoContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 10,
        marginLeft: 15
    },
    addPhoto: {
        color: '#223263',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 5,
        marginBottom: 10
    },
    addImage: {
        width: 60,
        height: 60,
        borderWidth: 0.5,
        borderColor: '#ccc',
        borderRadius: 5,
        marginLeft: 10
    },

})
