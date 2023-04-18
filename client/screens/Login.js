import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import logo from './../assets/logoblue.png'

export default Login = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={logo} />
                <Text style={styles.imageText}> Welcome to Slipshoe</Text>
                <Pressable onPress={() => { navigation.navigate('WriteReview') }}>
                    <Text style={styles.imageSubText}> Sing in to to continue</Text>
                </Pressable>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        backgroundColor: 'pink',
        alignSelf: 'center',
        marginTop: 120
    },
    image: {
        alignSelf: 'center'
    }
})