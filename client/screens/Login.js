import { StyleSheet, View, Text,Image, TextInput, TouchableOpacity  } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import logo from './../assets/logoblue.png';
import facebook from './../assets/facebook.png';
import google from './../assets/google.png';
import message from './../assets/message.png'
import password from './../assets/password.png';

export default Login = () => {
    return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={logo} />
                    <Text style={styles.text}> Welcome to Slipshoe</Text>
                    <Text style={styles.imageSubText}> Sign in to to continue</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Image source={message} style={styles.icon} />
                    <TextInput inputMode="email" style={styles.input} placeholder="Your Email"/>
                </View>
                <View style={styles.inputContainer}>
                    <Image source={password} style={styles.icon} />
                    <TextInput inputMode="text" secureTextEntry={true} style={styles.input} placeholder="Password"/>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>

                <View style={styles.orBar}>
                    <View style={styles.bar} />
                    <Text style={styles.or} >OR</Text>
                    <View style={styles.bar} />
                </View>

                <TouchableOpacity style={styles.orButton}>
                    <Image style={styles.orImage} source={google}/>
                    <Text style={styles.orText}>Login with Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.orButton}>
                    <Image style={styles.orImage} source={facebook}/>
                    <Text style={styles.orText}>Login with Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.fp}>
                    <Text style={styles.fpText}>Forgot Password?</Text>
                </TouchableOpacity>

                <View style={styles.registerContainer}>
                    <Text style={styles.rText}>Don't have an account? </Text>
                    <TouchableOpacity >
                        <Text style={styles.fpText}>Register</Text>
                    </TouchableOpacity>
                </View>

            </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    imageContainer: {
        backgroundColor: 'transparent',
        alignSelf: 'center',
        marginTop: 80
    },
    image: {
        alignSelf: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: '800',
        marginVertical: 15,
        alignSelf: 'center'
    },
    imageSubText: {
        alignSelf: 'center',
        color: '#9098B1',
        marginBottom: 30
    },
    inputContainer: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 5,
        height: 50,
        borderWidth: 1,
        borderColor: '#EBF0FF',
        borderRadius: 5
    },
    input: {
        flex: 1
    },
    icon: {
        alignSelf: 'center',
        marginHorizontal: 10
    },
    button: {
        backgroundColor: '#40BFFF',
        height: 60,
        marginHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 5,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '800',
        marginVertical: 15,
        alignSelf: 'center',
        color: 'white'
    },
    orBar: {
        flexDirection: 'row',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 10
    },
    bar: {
        backgroundColor: '#EBF0FF',
        flex: 1,
        height: 1
    },
    or: {
        color: '#9098B1',
        marginHorizontal: 10,
        fontWeight: '900'
    },
    orButton: {
        borderWidth: 1,
        borderColor: '#EBF0FF',
        height: 60,
        marginVertical: 5,
        marginHorizontal: 20,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    orImage: {
        backgroundColor: 'transparent'
    },
    orText: {
        flex: 1,
        textAlign: 'center',
        color: '#9098B1',
        fontWeight: '900',
        fontSize: 15
    },
    fp: {
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    fpText: {
        fontWeight: '800',
        color: '#40BFFF',
        fontSize: 14
    },
    registerContainer: {
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    rText: {
        fontWeight: '800',
        color: '#9098B1',
        fontSize: 14
    }
})