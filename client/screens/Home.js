import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Explore from './Explore';

const Tab = createBottomTabNavigator();

const Home1 = () => {
    return (
        <View style={styles.test}>
            <Text style={{ fontSize: 30, textAlign: 'center', paddingTop:100 }}>Home</Text>
        </View>
    )
}

const Cart = () => {
    return (
        <View style={styles.test}>
            <Text style={{ fontSize: 30, textAlign: 'center', paddingTop: 100 }}>Explore</Text>
        </View>
    )
}

const Offer = () => {
    return (
        <View style={styles.test}>
            <Text style={{ fontSize: 30, textAlign: 'center', paddingTop: 100 }}>Cart</Text>
        </View>
    )
}

const Account = () => {
    return (
        <View style={styles.test}>
            <Text style={{ fontSize: 30, textAlign: 'center', paddingTop: 100 }}>Offer</Text>
        </View>
    )
}


export default Home = () => {
    return (
        <Tab.Navigator initialRouteName='Explore' screenOptions={{ tabBarShowLabel: true, headerShown: false }} tabBar={(props) => <Tabbar {...props} />} >
            <Tab.Screen name="Home" component={Home1} />
            <Tab.Screen name="Explore" component={Explore} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Offer" component={Offer} />
            <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
    );
}
const Tabbar = ({ state, navigation }) => {
    const index = state.index;
    const routes = state.routes;
    const currentRoute = routes[index].name;

    return (
        <View style={styles.bottomNavigator}>
            <Pressable
                style={[
                    styles.button,
                    currentRoute === "Home" && styles.buttonSelected,
                ]}
                onPress={() => navigation.navigate("Home")}
                focused={currentRoute === "Home"}
            >
                <Icon name="home-outline" size={20} color={currentRoute === "Home" ? "#40BFFF" : "#9098B1"} />

                <Text style={[styles.buttonText, currentRoute === "Home" && styles.buttonSelectedText]}>Home</Text>
            </Pressable>
            <Pressable
                style={[
                    styles.button,
                    currentRoute === "Explore" && styles.buttonSelected,
                ]}
                onPress={() => navigation.navigate("Explore")}
                focused={currentRoute === "Explore"}
            >
                <Icon name="search-outline" size={20} color={currentRoute === "Explore" ? "#40BFFF" : "#9098B1"} />
                <Text style={[styles.buttonText, currentRoute === "Explore" && styles.buttonSelectedText]}>Explore</Text>
            </Pressable>
            <Pressable
                style={[
                    styles.button,
                    currentRoute === "Cart" && styles.buttonSelected,
                ]}
                onPress={() => navigation.navigate("Cart")}
                focused={currentRoute === "Cart"}
            >
                <Icon name="cart-outline" size={20} color={currentRoute === "Cart" ? "#40BFFF" : "#9098B1"} />
                <Text style={[styles.buttonText, currentRoute === "Cart" && styles.buttonSelectedText]}>Cart</Text>
            </Pressable>
            <Pressable
                style={[
                    styles.button,
                    currentRoute === "Offer" && styles.buttonSelected,
                ]}
                onPress={() => navigation.navigate("Offer")}
                focused={currentRoute === "Offer"}
            >
                <Icon name="pricetag-outline" size={20} color={currentRoute === "Offer" ? "#40BFFF" : "#9098B1"} style={{ transform: [{ rotateY: "180deg" }] }} />
                <Text style={[styles.buttonText, currentRoute === "Offer" && styles.buttonSelectedText]}>Offer</Text>
            </Pressable>
            <Pressable
                style={[
                    styles.button,
                    currentRoute === "Account" && styles.buttonSelected,
                ]}
                onPress={() => navigation.navigate("Account")}
                focused={currentRoute === "Account"}
            >
                <Icon name="person-outline" size={20} color={currentRoute === "Account" ? "#40BFFF" : "#9098B1"} />
                <Text style={[styles.buttonText, currentRoute === "Account" && styles.buttonSelectedText]}>Account</Text>
            </Pressable>
        </View>
    );
};


const styles = StyleSheet.create({
    bottomNavigator: {
        flexDirection: 'row',
        height: 70,
        backgroundColor: '#fff',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5
    },

    buttonText: {
        color: '#9098B1',
        marginTop: 3,
        fontSize: 10,
        fontWeight: '400'
    },
    buttonSelectedText: {
        color: '#40BFFF'
    }
});
