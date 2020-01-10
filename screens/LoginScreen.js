import React from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";

export default class LoginScreen extends React.Component {
    state = {
        name=""
    }

    continue = () => {
        this.props.navigation.navigate("Chat", {name: this.state.name})
    } 

    render() {
        return(
            <View>
                <View style={styles.circle}/>
                <View style={{ marginTop: 64}}>
                    <Image
                        source={require("../assets/images/vector-chat-icon.jpg")}
                        style={{width: 100, height: 100, alignSelf: "center"}}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F5F7"
    },
    cirlce: {
        width: 500,
        height: 500,
        borderRadius: 500/2,
        backgroundColor: "#FFFFFF",
        position: "absolute",
        left: -120,
        top: -20
    }
})