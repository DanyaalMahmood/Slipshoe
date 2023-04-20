import { Image, View, StyleSheet, Pressable, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default Explore = ({ navigation, route }) => {
    const [searchText, setSearchText] = useState('');
    const [isSearchBarFocused, setIsSearchBarFocused] = useState(false);

    const handleSearch = () => {
        console.log('Searching');
    }

    const handleClearSearch = () => {
        setSearchText('');
    }

    const searchBarBorderColor = isSearchBarFocused ? '#40BFFF' : '#EBF0FF';

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={[styles.searchBarContainer, { borderColor: searchBarBorderColor }]}>
                    <Icon name="search-outline" size={18} color="#40BFFF" />
                    <TextInput
                        style={styles.searchBarInput}
                        placeholder="Search"
                        onChangeText={(text) => setSearchText(text)}
                        value={searchText}
                        onSubmitEditing={handleSearch}
                        onFocus={() => setIsSearchBarFocused(true)}
                        onBlur={() => setIsSearchBarFocused(false)}
                    />
                    {searchText.length > 0 && (
                        <TouchableOpacity onPress={handleClearSearch}>
                            <Icon name="close-outline" size={25} color="#9098B1" />
                        </TouchableOpacity>
                    )}
                </View>
                <View style={styles.iconsContainer}>
                    <TouchableOpacity style={styles.iconButton}>
                        <Icon name="heart-outline" size={25} color="#9098B1" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Icon name="notifications-outline" size={25} color="#9098B1" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.line} />
            <ScrollView>
                <View style={styles.categoryContainer}>
                    <Text style={styles.categoryText}>Man Fashion</Text>
                    <View style={styles.roundedIconsContainer}>
                        <View style={styles.oneItem}>
                            <View style={styles.roundedIcon}>
                                <TouchableOpacity>
                                    <Icon name="shirt-outline" size={25} color="#40BFFF" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.text}>
                                <Text style={styles.roundedIconText}>Man Shirt</Text>
                            </View>
                        </View>
                        <View style={styles.oneItem}>
                            <View style={styles.roundedIcon}>
                                <TouchableOpacity>
                                    <Icon name="briefcase-outline" size={25} color="#40BFFF" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.text}>
                                <Text style={styles.roundedIconText}>Man Work Equipment</Text>
                            </View>
                        </View>
                        <View style={styles.oneItem}>
                            <View style={styles.roundedIcon}>
                                <TouchableOpacity>
                                    <Icon name="shirt-outline" size={25} color="#40BFFF" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.text}>
                                <Text style={styles.roundedIconText}>Shirts</Text>
                            </View>
                        </View>
                        <View style={styles.oneItem}>
                            <View style={styles.roundedIcon}>
                                <TouchableOpacity>
                                    <Icon name="man-outline" size={25} color="#40BFFF" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.text}>
                                <Text style={styles.roundedIconText}>Shirts</Text>
                            </View>
                        </View>
                        <View style={styles.oneItem}>
                            <View style={styles.roundedIcon}>
                                <TouchableOpacity>
                                    <Icon name="man-outline" size={25} color="#40BFFF" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.text}>
                                <Text style={styles.roundedIconText}>Shirts</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.categoryContainer}>
                    <Text style={styles.categoryText}>Woman Fashion</Text>
                    <View style={styles.roundedIconsContainer}>
                        <View style={styles.oneItem}>
                            <View style={styles.roundedIcon}>
                                <TouchableOpacity>
                                    <Icon name="shirt-outline" size={25} color="#40BFFF" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.text}>
                                <Text style={styles.roundedIconText}>Man Shirt</Text>
                            </View>
                        </View>
                        <View style={styles.oneItem}>
                            <View style={styles.roundedIcon}>
                                <TouchableOpacity>
                                    <Icon name="briefcase-outline" size={25} color="#40BFFF" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.text}>
                                <Text style={styles.roundedIconText}>Man Work Equipment</Text>
                            </View>
                        </View>
                        <View style={styles.oneItem}>
                            <View style={styles.roundedIcon}>
                                <TouchableOpacity>
                                    <Icon name="shirt-outline" size={25} color="#40BFFF" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.text}>
                                <Text style={styles.roundedIconText}>Shirts</Text>
                            </View>
                        </View>
                        <View style={styles.oneItem}>
                            <View style={styles.roundedIcon}>
                                <TouchableOpacity>
                                    <Icon name="man-outline" size={25} color="#40BFFF" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.text}>
                                <Text style={styles.roundedIconText}>Shirts</Text>
                            </View>
                        </View>
                        <View style={styles.oneItem}>
                            <View style={styles.roundedIcon}>
                                <TouchableOpacity>
                                    <Icon name="man-outline" size={25} color="#40BFFF" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.text}>
                                <Text style={styles.roundedIconText}>Shirts</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
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
        paddingLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#223263'
    },
    line: {
        height: 0.5,
        backgroundColor: '#EBF0FF'
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 20,
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flex: 1,
        marginRight: 10,
        borderWidth: 1,
    },
    searchBarInput: {
        marginLeft: 10,
        fontSize: 12,
        color: '#223263',
        flex: 1,
        fontWeight: '700',
        opacity: 0.5,
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        marginLeft: 10,
    },
    categoryContainer: {
        alignItems: 'flex-start',
        marginVertical: 20,
        flexWrap: 'wrap'
    },
    categoryButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#EBF0FF',
        width: 100,
        height: 100
    },
    categoryIconContainer: {
        backgroundColor: '#EBF0FF',
        borderRadius: 50,
        padding: 10,
        alignItems: 'center'
    },
    categoryText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#223263',
        marginLeft: 16
    },
    roundedIconsContainer: {
        flexDirection: 'row',
        // alignItems: 'center',
        marginTop: 20,
        flexWrap: 'wrap',
        // justifyContent: 'space-between',

    },

    roundedIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 4,
        // backgroundColor: 'pink',
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: '#EBF0FF',
    },
    roundedIconText: {
        fontSize: 10,
        fontWeight: '400',
        color: '#9098B1',
        maxWidth: 50,
        marginTop: 5
    },
    text: {
        alignItems: 'center',
        marginTop: 5
    },
    oneItem: {
        marginLeft: 10,
        marginBottom: 20
    }
});
