import React, { useState } from 'react';
import { Image, View, StyleSheet, Pressable, Text, ScrollView, FlatList, TouchableOpacity } from "react-native";

const reviews = [
    { id: '1', name: 'John', rating: 5, review: 'Great product!', date: 'Mar 10, 2022', images: [] },
    { id: '2', name: 'Emily', rating: 3, review: 'Average product', date: 'Apr 5, 2022', images: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300'] },
    { id: '3', name: 'Mark', rating: 4, review: 'Good product', date: 'Apr 12, 2022', images: ['https://picsum.photos/200/300'] },
];

export default ReviewProduct = ({ navigation, route }) => {
    const [selectedRating, setSelectedRating] = useState(0);

    const renderItem = ({ item }) => (
        <View style={styles.reviewContainer}>
            <View style={styles.reviewHeader}>
                <Image style={styles.profileImage} source={{ uri: 'https://picsum.photos/200' }} />
                <View style={styles.reviewHeaderText}>
                    <Text style={styles.name}>{item.name}</Text>
                    <View style={styles.starContainer}>
                        {[...Array(item.rating)].map((_, index) => (
                            <Image key={index} style={styles.star} source={require('./../assets/star.png')} />
                        ))}
                    </View>
                    <Text style={styles.date}>{item.date}</Text>
                </View>
            </View>
            <Text style={styles.reviewText}>{item.review}</Text>
            {item.images.length > 0 &&
                <FlatList
                    data={item.images}
                    horizontal
                    renderItem={({ item }) => (
                        <Image style={styles.reviewImage} source={{ uri: item }} />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={styles.reviewImagesContainer}
                />
            }
        </View>
    );

    const filterReviews = (rating) => {
        setSelectedRating(rating);
    }

    const filteredReviews = selectedRating === 0 ? reviews : reviews.filter(review => review.rating === selectedRating);

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Pressable onPress={() => navigation.navigate('Login')}>
                    <Image style={styles.backImage} source={require('./../assets/back.png')} />
                </Pressable>
                <Text style={styles.totalReviews}>5 Review</Text>
                <View style={styles.emptyView} />
            </View>
            <View style={styles.line} />
            <View style={styles.filterContainer}>
                <ScrollView horizontal={true}>
                    <TouchableOpacity style={[styles.filterButton, selectedRating === 0 && styles.activeFilterButton]} onPress={() => filterReviews(0)}>
                        <Text style={styles.filterText}>All Reviews</Text>
                    </TouchableOpacity>
                    {[...Array(5)].map((_, index) => {
                        const rating = index + 1;
                        return (
                            <TouchableOpacity key={index} style={[styles.filterButton, selectedRating === rating && styles.activeFilterButton]} onPress={() => filterReviews(rating)}>
                                <Text style={styles.filterText}><Image style={styles.star} source={require('./../assets/star.png')} /> {rating}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
            <FlatList
                data={filteredReviews}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.reviewList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    top: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 70,
        paddingBottom: 25
    },
    backImage: {
        resizeMode: 'contain',
        backgroundColor: '#fff',
        width: 24,
        height: 24
    },
    totalReviews: {
        paddingLeft: 20,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#223263'
    },
    emptyView: {
        width: 48
    },
    line: {
        height: 0.5,
        backgroundColor: 'grey'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
        paddingTop: 20,
        // backgroundColor: 'pink',
    },
    filterButton: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginRight: 10,
        borderWidth: 0.5,
        borderColor: 'grey'
    },
    activeFilterButton: {
        backgroundColor: '#c9e9f6',
    },
    filterText: {
        color: '#40BFFF',
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10
    },
    reviewContainer: {
        margin: 20,
        padding: 10,
        borderRadius: 5,
        borderWidth: 0.1
    },
    reviewHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    reviewHeaderText: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    starContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    star: {
        width: 15,
        height: 15,
        marginRight: 5,
    },
    date: {
        fontSize: 12,
        color: '#777',
    },
    reviewText: {
        fontSize: 14,
        marginBottom: 10,
    },
    reviewImagesContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginVertical: 10,
    },
    reviewImage: {
        width: 100,
        height: 100,
        marginRight: 10,
        borderRadius: 5,
    },
    reviewList: {
        paddingBottom: 20,
    },
});
