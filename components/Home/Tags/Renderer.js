import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { height, width } from '../../helpers/Dimmention'
import AddTag from "./AddTag"


let colours = ["blue", "pink", "yellow"]

const Renderer = ({ data }) => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const mathbool = Math.floor(Math.random() * 4 + 1) + 1
    console.log(mathbool)
    return (
        <View style={styles.Main}>
            <FlatList
                //={styles.FlatListItems}
                data={data}
                horizontal={true}
                contentContainerStyle={styles.FlatListItems}
                renderItem={
                    ({ item }) => (
                        <Roe
                            name={item.addTag}
                        />
                    )
                }
                keyExtractor={(index, item) => index}
            />
            <Button
                title={ modalVisible ? "hide" : "add"}
                style={styles.AddBtn}
                onPress={() => setModalVisible(!modalVisible)} />

            {
                modalVisible ? <AddTag/> : <></>
            }    
            
        </View>
    )
}

export default Renderer

const styles = StyleSheet.create({
    Main: {
        width,
        alignItems: "center",
        height: height / 7,
        flexDirection: "row",
        justifyContent:"space-evenly",
    },
    AddBtn:{
        width:width/10,
    },
    FlatListItems: {
        width: width / 4,
        height: height / 7,
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    Ro: {
        padding: 10,
        margin: 10,
        width: width / 15,
    },
    btn: {
        width: width / 15,
        textAlign: "center",
        height: height / 12,
        alignItems: "center",
        justifyContent: "center"
    },
    TextStyle: {
        color: "white",
        fontSize: height / 40,
    },

})

const Roe = ({ name, onPress }) => {
    const Pressed = false
    return (
        <View style={styles.Ro}>
            <TouchableOpacity
                //onPress={()=>Pressed = false}
                style={[styles.btn, { backgroundColor: Pressed ? "pink" : "#110738" }]}
            >
                <Text style={styles.TextStyle}>{name}</Text>
            </TouchableOpacity>
        </View>

    )
}
