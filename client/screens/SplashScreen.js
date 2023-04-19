import { Image, View,StyleSheet } from "react-native";
import logo from './../assets/logo.png'

export default Splash = () => {
    return (
        <View style={styles.container}>
            <Image source={logo}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#40BFFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})