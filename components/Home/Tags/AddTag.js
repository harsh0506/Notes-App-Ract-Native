import { StyleSheet, Text, View, Modal, TextInput, Button, FlatList, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { height, width } from '../../helpers/Dimmention'
import { set } from '../../firebase/Crud'

const AddTag = ({modalVisible}) => {

    const [addTag, setAddTag] = React.useState("")
    const d = {
        addTag,
        tag: true
    }
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={true}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                <TextInput
                    value={addTag}
                    onChangeText={setAddTag}
                    placeholder="add note"
                    style={{ backgroundColor: 'Pink', color: "blue" }}
                />
                <Button
                    onPress={() => { set(d) }}
                    title="set"
                />
                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        width:width/8,
        height:height/10,
        //backgroundColor:"white"
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
export default AddTag