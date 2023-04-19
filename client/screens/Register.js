import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import logo from './../assets/logoblue.png';
import message from './../assets/message.png'
import password from './../assets/password.png';
import user from './../assets/user.png';


import { useState } from "react";

export default Register = ({navigation}) => {
    const [nameFocus, setNameFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    const [passwordagainFocus, setPasswordagainFocus] = useState(false);
    

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={logo} />
                <Text style={styles.text}> Lets Get Started</Text>
                <Text style={styles.imageSubText}> Create a new account </Text>
            </View>

            <View style={styles.inputContainer(nameFocus)}>
                <Image source={user} style={styles.icon(nameFocus)} />
                <TextInput inputMode="text" style={styles.input} placeholder="Full Name" onFocus={() => setNameFocus(true)} onBlur={() => setNameFocus(false)} />
            </View>
            <View style={styles.inputContainer(emailFocus)}>
                <Image source={message} style={styles.icon(emailFocus)} />
                <TextInput inputMode="email" style={styles.input} placeholder="Your Email" onFocus={() => setEmailFocus(true)} onBlur={() => setEmailFocus(false)} />
            </View>
            <View style={styles.inputContainer(passwordFocus)}>
                <Image source={password} style={styles.icon(passwordFocus)} />
                <TextInput inputMode="text" secureTextEntry={true} style={styles.input} placeholder="Password" onFocus={() => setPasswordFocus(true)} onBlur={() => setPasswordFocus(false)}/>
            </View>
            <View style={styles.inputContainer(passwordagainFocus)}>
                <Image source={password} style={styles.icon(passwordagainFocus)} />
                <TextInput inputMode="text" secureTextEntry={true} style={styles.input} placeholder="Password Again" onFocus={() => setPasswordagainFocus(true)} onBlur={() => setPasswordagainFocus(false)}/>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            <View style={styles.registerContainer}>
                <Text style={styles.rText}>Have an account? </Text>
                <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
                    <Text style={styles.fpText}>Sign In</Text>
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
        marginTop: 150
    },
    image: {
        alignSelf: 'center',
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
        marginBottom: 30,
    },
    inputContainer: (focus) => {
        bcolor = "#EBF0FF"
        if (focus) {
            bcolor = "#40BFFF"
        }


        return {
            backgroundColor: 'transparent',
            flexDirection: 'row',
            marginHorizontal: 20,
            marginVertical: 5,
            height: 50,
            borderWidth: 1,
            borderColor: bcolor,
            borderRadius: 5,
        }
    },
    input: {
        fontSize: 14,
        fontWeight: '800',
        color: '#9098B1',
        flex: 1
    },
    icon: (focus) => {
        tcolor = {}
        if(focus) {
            tcolor = {tintColor: '#40BFFF'}
        }

        return {
            alignSelf: 'center',
            marginHorizontal: 10,
            ...tcolor
        }

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
    fpText: {
        fontWeight: '800',
        color: '#40BFFF',
        fontSize: 14
    },
    registerContainer: {
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 15
    },
    rText: {
        fontWeight: '800',
        color: '#9098B1',
        fontSize: 14
    }
})